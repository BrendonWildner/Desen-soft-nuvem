const express = require('express');
const app = express();

// Rota 1: Página inicial
app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo à Página Inicial!</h1>');
});

// Rota 2: Página de Contato
app.get('/contato', (req, res) => {
  res.send('<h1>Contato: email@email.com</h1>');
});

// Rota 3: Página Sobre
app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre Nós: Em desenvolvimento!</h1>');
});

// Servidor rodando na porta 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
