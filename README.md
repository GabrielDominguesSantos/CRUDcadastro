# 💡 Projeto de básico de cadastro de usuários 

## 📝​ Descrição do Projeto

Este projeto é um sistema simples de criação de usuários, onde você consegue criar, editar e deletar qualquer usuário cadastrado no sistema. Todos os usuários são listados na tela inicial apresentando seus respectivos nome, email e telefone. O intuito da criação desta aplicação é treinar conceitos como métodos CRUD e sua relação com o banco de dados, integração de frontend e backend no mesmo projeto, e o uso de APIs.

## 🛠️ Tecnologias

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" heigth="100" width="100"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" heigth="100" width="100"/> 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" heigth="100" width="100"/> 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" heigth="100" width="100"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrok/ngrok-original.svg" heigth="100" width="100"/>

## ❔ Como executar o projeto
Siga os passos abaixo para configurar e executar o projeto localmente em seu dispositivo móvel.
## ✅ Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Expo Go](https://expo.dev/client) no celular
- [Git](https://git-scm.com/)
### Preparando o Ambiente:
1. Clone o Repositório:
   ```bash
   git clone https://github.com/GabrielDominguesSantos/CRUDcadastro
   ```
2. Entre na pasta do aplicativo:
   ```bash
   cd frontend/MeuCrud
   ```
3. Instale as dependências do aplicativo:
   - Usando NPM:
     ```bash
     npm install
     ```
   - Usando Yarn:
     ```bash
     yarn install
     ```
   - Usando pnpm
     ```bash
     pnpm install
     ```
4. Instale as depêndencias do backend:
   - Na pasta raíz do projeto:
   ```bash
   cd backend
   ```
   ```bash
   npm install -g json-server
   ```
   ```bash
   npm install -g localtunnel
   ```
## 🥏 Executando o Projeto:
Em três terminais distintos, você deve executar as seguintes operações:
### Executando Expo:
No primeiro terminal, inicialize o projeto com expo (na raíz do projeto)
   - Se usará a mesma internet entre o PC e Celular:
   ```bash
   npx expo start
   ```
   - Se não usar, utilize:
   ```bash
   npx expo start --tunnel
   ```
  o ```--tunnel``` serve para criar um tunnel entre o PC e o celular, permitindo rodar a aplicação sem que eles estejam na mesma internet
### Executando json-server
No seu segundo terminal, simule o BackEnd utilizando o json-server
- Na raíz do seu projeto, execute:
  ```bash
  npx json-server --watch db.json --port 3000  
  ```
  O ```--watch``` serve para que você não precise sempre reiniciar o terminal toda vez que atualizar algo de **db.json**
  O ```--port``` tem a utilidade de dizer ao json-server em qual porta ele deve inicializar
### Criando Tunnel entre a API e nossa Aplicação
No terceiro e último terminal, voce deve escolher uma forma de conectar a API que está no ```localhost``` e sua aplicação mobile. Para isso, existem algumas possibilidades: 

#### LocalTunnel
O LocalTunnel cria um tunel entre a API e o seu dispositivo, permitindo que o celular acesse a API mesmo em redes diferentes.

1. Inicie o tunnel:
   ```bash
   npx lt --port 3000
   ```
   - O resultado será: ```your url is: SUA_URL_AQUI```
   - Você deverá copiar essa URL e colar no arquivo configApi.js.

> ⚠️ **Atenção:** A URL gerada pelo LocalTunnel muda ao decorrer do tempo. Caso a conexão com a API começar a dar erro durante a execução do projeto, você deve executar o comando novamente e substituir a URL.

## ❗Explicação da solução

### 🚀 Solução Técnica
A arquitetura deste projeto foi pensada para simular um ambiente real de produção, onde o aplicativo mobile consome dados de uma API externa, mesmo em fase de desenvolvimento local.

### ⚙️ Backend e Persistência
Para agilizar o desenvolvimento do protótipo e focar na lógica de consumo de dados, utilizei o **JSON Server**. Ele atua como uma API REST completa, realizando operações de persistência em um arquivo ``db.json``. Isso permite testar métodos **GET, POST, PUT e DELETE** com a mesma fidelidade de um banco de dados real.

### 📱 Frontend Mobile
O aplicativo foi construído com **React Native e Expo**, utilizando uma interface intuitiva para listagem e manipulação de usuários. A principal preocupação foi garantir que o estado da interface fosse atualizado em tempo real após cada operação de CRUD.

🔗 O Desafio da Conectividade (Tunneling)
O maior diferencial técnico desta solução é a implementação de **Túneis HTTP (LocalTunnel/ngrok)**.
- **O Problema:** Dispositivos móveis físicos muitas vezes não conseguem acessar o ``localhost`` do computador de desenvolvimento devido a restrições de rede ou IP.
- **A Solução:** Ao criar um túnel para a porta ``3000``, a API local ganha uma URL pública temporária. Isso permite que o aplicativo, rodando em qualquer rede (Wi-Fi ou 4G), consiga realizar requisições ao backend sem configurações complexas de firewall.

## 🎥​ Vídeo do projeto funcionando
