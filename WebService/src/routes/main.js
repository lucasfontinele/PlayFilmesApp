'use strict';
const express = require('express');
const app = express();
const port = 8080;
const body = require('body-parser');

require('colors');

app.listen(port);
console.log(("[+] Started WebService at http://0.0.0.0:" + port).green);

const Main = require('../routes/index');
const Users = require('../routes/user');

const Routes = () => {            
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    });

    app.use(body.json());

    app.get('/', (req, res) => {
        res.redirect('/index');
    });
    
    app.use('/index', Main);    
    app.use('/users', Users);

    app.use((req, res) => {
        res.status(404);
        let status = {ok: false, code: res.statusCode, message: "Página não encontrada"};
        
        res.send(JSON.stringify(status));
    });
}

module.exports = Routes();