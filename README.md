## Descrição do Projeto

O projeto Aggregated Menu API é uma aplicação Node.js construída com o framework Express, que oferece uma API simples para a agregação de dados de três endpoints diferentes. O objetivo principal desta aplicação é facilitar a obtenção e a combinação de informações.

## Funcionalidades Principais
Obtenção de Dados de Menus:

- A aplicação realiza solicitações HTTP do tipo GET para três endpoints distintos, cada um representando um menu específico.
Agregação de Resultados:

- Utilizando a rota POST "/aggregated-menu", a aplicação obtém dados de três menus diferentes e os combina em um único conjunto de dados agregados.

## Como Usar
. Pré-requisitos
- Certifique-se de ter o Node.js instalado em sua máquina.

## Instalação

# Clone o repositório:
git clone https://github.com/seu-usuario/seu-projeto.git

# Navegue até o diretório do projeto:
cd seu-projeto

# Instale as dependências:
npm install

# Executando a Aplicação
Execute o seguinte comando para iniciar o servidor:
npm start

A aplicação estará disponível em [http://localhost:3000/aggregated-menu].

# Endpoint 
Para testar o novo endpoint POST, você pode usar ferramentas como o curl ou o Postman. Aqui está um exemplo usando o curl:

curl -X POST http://localhost:3000/aggregated-menu


