const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//mongoose.connect('mongodb+srv://alunofiap:pjGAXb3eRcNaDDF7@cluster0.2kkon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongoose.connect('mongodb://user1:user1password@192.168.56.111/microserivice-api-venda-fiap2021?retryWrites=true&w=majority')

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();

});

require('./models/product');
require('./models/aluno');
require('./models/layout');

//rotas
const productRouter = require('./routes/product-route');
app.use('/products', productRouter);

const alunoRouter = require('./routes/aluno-route');
app.use('/aluno', alunoRouter);


const layoutRouter = require('./routes/layout-route');
app.use('/layout', layoutRouter);

module.exports = app;