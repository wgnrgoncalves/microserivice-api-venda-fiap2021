const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();

});


//rotas

const productRouter = require('./routes/product-route');
app.use('/products', productRouter);

module.exports = app;