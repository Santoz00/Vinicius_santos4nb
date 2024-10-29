const express = require("express"); // Importa o Express
const app = express(); // Cria uma instância do aplicativo Express
const port = process.env.PORT || 3000; // Define a porta do servidor

// Middleware para parsing de JSON
app.use(express.json());

// Rota de exemplo
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
