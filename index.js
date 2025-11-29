const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rota de teste
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Exemplo de rota de negócio
app.post('/soma', (req, res) => {
  const { a, b } = req.body;
  const resultado = Number(a) + Number(b);
  res.json({ resultado });
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
