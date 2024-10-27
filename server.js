const express = require('express');
const sequelize = require('./config/database'); // Caminho para sua configuração do Sequelize
const produtosRoutes = require('./routes/produtos');
const clientesRoutes = require('./routes/clientes');
const estoqueRoutes = require('./routes/estoque'); // Importação da rota de Estoque

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para entender JSON

// Usar as rotas
app.use('/produtos', produtosRoutes);
app.use('/clientes', clientesRoutes);
app.use('/estoque', estoqueRoutes);

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync({ force: false }) // Altere para true se precisar reiniciar as tabelas
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(error => console.log('Erro ao conectar ao banco de dados:', error));
