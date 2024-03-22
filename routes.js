// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');

// Iniciando as rotas
route.get('/', home.pagInicialGetIndex);
route.get('/Aluno', home.pagInicialGetAluno);
route.get('/Sala', cadastro.pagInicialGetSala);
route.post('/Sala', cadastro.salaInsert);

module.exports = route;