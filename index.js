const express = require('express');
const pessoasController = require('./src/controller/pessoas');
const empresasController = require('./src/controller/empresas');
const livrosController = require('./src/controller/livros');
const carrosController = require('./src/controller/carros');
const produtosController = require('./src/controller/produtos');

const app = express();

app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log('Listening on port ' + port);
});

app.use((req, res, next) => {
  next();
});

app.use('/pessoas', pessoasController);
app.use('/empresas', empresasController);
app.use('/livros', livrosController);
app.use('/carros', carrosController);
app.use('/produtos', produtosController);
app.get('/', (req, res) => res.send('API Rest básica em NodeJS (Express)!'));

