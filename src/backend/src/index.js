const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 30000,
  ssl: {
      rejectUnauthorized: true
  }
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    process.exit(1);
  }
  console.log('Conectado ao MySQL com sucesso!');
});

db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
  )
`);

db.query(`
  CREATE TABLE IF NOT EXISTS ongs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    link VARCHAR(255) NOT NULL,
    imageSrc VARCHAR(255)
  )
`);

db.query(`
  CREATE TABLE IF NOT EXISTS redirect (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    ong_id INT,
    ong_name VARCHAR(255),
    redirect_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (ong_id) REFERENCES ongs(id)
  )
`);

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (results.length > 0) {
      return res.status(400).json({ error: 'Usuário já existe!' });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ error: 'Erro ao criptografar a senha' });

      db.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword],
        (err, result) => {
          if (err) return res.status(500).json({ error: 'Erro ao criar usuário' });
          res.status(201).json({ message: 'Usuário criado com sucesso!' });
        }
      );
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    const user = results[0];
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

  db.query(
    'INSERT INTO redirect (user_id, ong_id, ong_name, redirect_date) VALUES (?, ?, ?, ?)',
    [userId, ongId, ongName, redirectDate],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao registrar o redirecionamento' });
      }
      res.status(201).json({ message: 'Redirecionamento registrado com sucesso!' });
    }
  );
});

app.get('/ongs', (req, res) => {
  db.query('SELECT * FROM ongs', (err, rows) => {
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
    db.query('SELECT id, name FROM users WHERE id = ?', [userId], (err, results) => {
      if (err || results.length === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      const user = results[0];
      res.json({ id: user.id, username: user.name });
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});