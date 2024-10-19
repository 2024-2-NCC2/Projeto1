# 📊 FoodPath Database

Este documento descreve a estrutura e o funcionamento do banco de dados utilizado no projeto **FoodPath**, explicando as tabelas, suas relações, e os dados armazenados. Abaixo estão os principais componentes do sistema de banco de dados.

## 🗂️ Estrutura do Banco de Dados

O banco de dados do FoodPath utiliza o SQLite como solução de armazenamento, garantindo simplicidade e eficiência. Ele consiste em três tabelas principais: `users`, `ongs`, e `redirect`, com suas respectivas relações.

### 👤 Tabela `users`

A tabela `users` armazena informações de todos os usuários registrados no sistema. Os campos principais incluem:

- `id`: Identificador único de cada usuário.
- `name`: Nome completo do usuário.
- `email`: Email único, utilizado como credencial de login.
- `password`: Senha do usuário armazenada de forma segura com hashing.

### 🏢 Tabela `ongs`

A tabela `ongs` contém os detalhes das ONGs listadas no sistema, que são exibidas aos usuários. Cada ONG tem os seguintes atributos:

- `id`: Identificador único da ONG.
- `name`: Nome da ONG.
- `description`: Descrição breve da ONG e sua missão.
- `link`: URL para o site oficial da ONG onde os usuários podem fazer doações.
- `imageSrc`: Caminho ou nome da imagem usada para representar visualmente a ONG no site.

### 🔁 Tabela `redirect`

A tabela `redirect` é responsável por registrar todos os redirecionamentos de usuários para as páginas das ONGs, permitindo a contabilização de quantas vezes uma ONG foi acessada. Seus campos incluem:

- `id`: Identificador único do redirecionamento.
- `user_id`: Referência ao usuário que realizou o redirecionamento.
- `ong_id`: Referência à ONG para qual o usuário foi redirecionado.
- `ong_name`: Nome da ONG para facilitar a visualização dos dados.
- `redirect_date`: Data e hora em que o redirecionamento ocorreu.

## 🔗 Relacionamentos

- A tabela `redirect` faz referência às tabelas `users` e `ongs` através das chaves estrangeiras `user_id` e `ong_id`, garantindo a rastreabilidade dos redirecionamentos realizados no sistema.

## ⚙️ Funcionalidades Implementadas

O sistema de banco de dados é interligado às funcionalidades de registro e login de usuários, além de permitir o rastreamento de redirecionamentos para ONGs. As principais operações incluem:

- **Registro de Usuários:** Criação de novas contas de usuário com verificação de email único.
- **Login de Usuários:** Autenticação com validação de email e senha, utilizando JWT para sessões seguras.
- **Listagem de ONGs:** Exibe todas as ONGs registradas no banco de dados, permitindo que os usuários escolham para onde redirecionar.
- **Redirecionamento de Usuários:** Registra no banco de dados cada redirecionamento de um usuário para uma ONG, incluindo data e ONG de destino.

## 📦 Ferramentas Utilizadas

- **SQLite**: Utilizado como o banco de dados principal, oferecendo uma solução leve e fácil de configurar.
- **bcrypt**: Biblioteca para hashing de senhas, garantindo segurança no armazenamento de credenciais.
- **JWT (JSON Web Token)**: Utilizado para autenticação de usuários, gerando tokens seguros que expiram em uma hora.
- **Node.js e Express**: Frameworks de backend que gerenciam as rotas, interagem com o banco de dados e garantem o funcionamento da API.