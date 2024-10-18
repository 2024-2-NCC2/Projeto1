const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const cors = require('cors');
const db = new sqlite3.Database('./foodpath.db');

app.use(cors());

app.use(express.json());

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

db.run(`
  CREATE TABLE IF NOT EXISTS ongs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    link TEXT NOT NULL,
    imageSrc TEXT
  )
`);

db.run(`
  CREATE TABLE IF NOT EXISTS redirect (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    ong_id INTEGER,
    ong_name TEXT,
    redirect_date TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(ong_id) REFERENCES ongs(id)
  )
`);

// db.run(`INSERT INTO ongs (name, description, link, imageSrc) VALUES 
//   ('Banco de Alimentos', 'Fundada em 1998, a ONG Banco de Alimentos é uma associação civil que recolhe alimentos que já perderam valor de prateleira no comércio e indústria, mas ainda estão aptos para consumo, e os distribui onde são mais necessários.', 'https://bancodealimentos.colabore.org/doe-ong-banco-de-alimentos-pf/single_step?utm_campaign=pf&utm_medium=botao&utm_source=site', 'bancoAlimentosImg'),
//   ('Misturaí', 'Criado em março de 2020, o projeto da ONG Misturaí, com sede no Rio Grande do Sul, surgiu em resposta ao aumento da fome e à crise econômica e sanitária. Seu objetivo é distribuir diariamente refeições para pessoas em vulnerabilidade social.', 'https://misturai.com/como-ajudar/', 'misturaiImg'),
//   ('Stop Hunger', 'O Stop Hunger, criado em 1996 por colaboradores da Sodexo nos EUA, é uma força global na luta contra a fome e a má nutrição. No Brasil, atua desde 2003 e, há seis anos, estabeleceu o Instituto Stop Hunger para promover iniciativas no país.', 'https://br.stop-hunger.org/home/contact-form.html', 'stopHungerImg'),
//   ('Ação Cidadania', 'A Ação da Cidadania trabalha para garantir que todos tenham acesso à alimentação adequada, unindo esforços em ações práticas e políticas. Eles possuem compromisso em transformar vidas, construindo um Brasil onde ninguém passe fome.', 'https://www.acaodacidadania.org.br/como-apoiar', 'acaoCidadaniaImg'),
//   ('Sesc - Mesa Brasil', 'A Sesc Mesa Brasil é a maior rede privada de bancos de alimentos da América Latina, combatendo a fome e o desperdício, a partir de doações de parceiros, e contribuindo para a garantia da segurança alimentar e nutricional em todo o Brasil.', 'https://www.sesc.com.br/atuacoes/assistencia/sesc-mesa-brasil/participe/', 'sescImg'),
//   ('Cáritas Brasileira - Sumaúma', 'As atividades são realizadas na cidade de Boa Vista, e o projeto tem como objetivo promover o acesso a refeições preparadas que atendam às necessidades e preferências nutricionais especializadas de grupos vulneráveis, como gestantes e bebês.', 'https://caritas.org.br/colabore', 'caritasBrasilImg')
// `);

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (user) {
      return res.status(400).json({ error: 'Usuário já existe!' });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ error: 'Erro ao criptografar a senha' });

      db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], function (err) {
        if (err) return res.status(500).json({ error: 'Erro ao criar usuário' });

        res.status(201).json({ message: 'Usuário criado com sucesso!' });
      });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado!' });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ error: 'Senha inválida!' });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.json({ message: 'Login bem-sucedido', token });
    });
  });
});

app.post('/redirect', (req, res) => {
  const { userId, ongId, ongName } = req.body;
  const redirectDate = new Date().toISOString();

  db.run(
    'INSERT INTO redirect (user_id, ong_id, ong_name, redirect_date) VALUES (?, ?, ?, ?)',
    [userId, ongId, ongName, redirectDate],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao registrar o redirecionamento' });
      }
      res.status(201).json({ message: 'Redirecionamento registrado com sucesso!' });
    }
  );
});

app.get('/ongs', (req, res) => {
  db.all('SELECT * FROM ongs', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar ONGs' });
    }
    res.json(rows);
  });
});

app.get('/profile', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    const userId = decoded.id;
    db.get('SELECT id, name FROM users WHERE id = ?', [userId], (err, row) => {
      if (err || !row) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.json({ id: row.id, username: row.name });
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});