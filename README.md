# 🌱 **FoodPath**

<div align="center">
  <img src="images/fecap-icon-img.png" alt="FecapIcon" width="250" height="250" style="margin-right: 20px;">
  <img src="images/icon-foodpath-white.png" alt="FoodPathIcon" width="250" height="250">
</div>

O **FoodPath** é um projeto que visa conscientizar as pessoas sobre a situação da fome no Brasil, incentivando doações para ONGs e instituições que combatem essa causa. Através de uma plataforma interativa e informativa, o usuário pode entender melhor o problema e contribuir com doações.

## 🛠️ **Tecnologias Utilizadas**

- **Front-end**: React, JavaScript, HTML, CSS, Bootstrap
- **Back-end**: Node.js com Express
- **Banco de Dados**: SQLite

## 🎯 **Objetivos**

O objetivo principal do FoodPath é contribuir para o **Objetivo de Desenvolvimento Sustentável (ODS)** de **erradicação da fome**. Ao conectar doadores e organizações, buscamos criar um impacto social positivo através da tecnologia.

## 📊 **Dados e Análise**

O site contabiliza as doações e redirecionamentos feitos para ONGs localizadas em diferentes regiões, utilizando essa informação para gerar gráficos e análises que mostram a distribuição de redirecionamentos, destacando os locais com mais e menos contribuições. Cada dado é retirado do nosso [Banco de Dados](docs/Entrega%202/BD/README.md).

## 👥 **Integrantes do Projeto**

- Gustavo Oliveira Demetrio
- Felipe Vallim Soares
- Pedro Della Rosa Antônio
- Saulo Pereira de Jesus
- Carlos Roberto Santos Latorre

---

## 💻 **Como Rodar o Projeto**

### Pré-requisitos
Antes de começar, certifique-se de ter o **Node.js** instalado em sua máquina. Caso não tenha, siga o tutorial de instalação abaixo.

### Instalação do Node.js
1. Acesse o [site oficial do Node.js](https://nodejs.org/en/download) e faça o download da versão LTS mais recente.
   
2. Siga as instruções de instalação conforme o seu sistema operacional:
   - **Windows**: Baixe o instalador `.msi`, execute e siga as instruções.
     
   - **Linux**: Use o gerenciador de pacotes da sua distribuição, por exemplo:
     ```bash
     sudo apt install nodejs
     ```
   - **macOS**: Use o Homebrew:
     ```bash
     brew install node
     ```

### Passo a Passo para Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/2024-2-NCC2/Projeto1.git
   ```
   ou
   
   ```bash
   git clone https://github.com/saulosw/foodpath-FECAP.git
   ```
2. Instale as dependências no front-end:
   ```bash
   cd src/frontend
   npm install
   ```
   Apóis isso, execute o site:
   ```bash
   npm run dev
   ```
3. No back-end, instale as dependências:
   ```bash
   cd src/backend
   npm install
   ```
   Inicie o servidor:
   ```bash
   node index.js
   ```
      
## 🎨 **Design do Projeto**
O design e planejamento visual do site FoodPath foi criado no Figma. Você pode acessar o layout completo através [deste link](https://www.figma.com/proto/6X5ky6RR9afc1kDfC0Sp7s/FoodPath?node-id=38-19&t=dD5YYOmY63fpABjU-1&starting-point-node-id=34%3A67).

## 🎥 **Demonstração**

<div style="text-align: center; font-size: 18px;">
    <img src="/images/demons-foodpath-pages.gif" alt="Demonstração do site - All Pages" /><br>
    <img src="/images/demons-foodpath-ongs.gif" alt="Demonstração do site - ONGs Page" /><br>
    <img src="/images/demons-foodpath-user.gif" alt="Demonstração do site - User Page" />
</div>

## 📚 **Referências**
- Todos os dados e referências estão no [Projeto de Extensão](docs/Entrega%203/ProjetoExtensao/GRUPO%2001%20-%20CCOMP%20-%20Projetos%20de%20Extensão.pdf)
- Documentação do React: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- Documentação do Node.js: [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
- Uso do SQLite: [https://www.sqlite.org/docs.html](https://www.sqlite.org/docs.html)
---

## 📄 **Licença**

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
  <a property="dct:title" rel="cc:attributionURL" href="https://github.com/2024-2-NCC2/Projeto1">FoodPath</a> 
  by <span property="cc:attributionName">Gustavo Demetrio, Felipe Soares, Pedro Della Rosa, Saulo Pereira, Carlos Roberto</span> 
  is licensed under 
  <a href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">
    CC BY-NC 4.0
    <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="">
    <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="">
    <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt="">
  </a>
</p>