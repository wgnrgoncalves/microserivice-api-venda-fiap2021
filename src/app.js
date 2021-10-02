const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('')


app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();

});

require('./models/product');
require('./models/aluno');

//rotas
const productRouter = require('./routes/product-route');
app.use('/products', productRouter);

const alunoRouter = require('./routes/aluno-route');
app.use('/aluno', alunoRouter);

module.exports = app;