'use strict';
const express = require('express');
const app = express();
const { webservice } = require('../../config/config').config;
const body = require('body-parser');

require('colors');

app.listen(webservice);
console.log(("[+] Started WebService at http://0.0.0.0:" + webservice).green);

const Main = require('../routes/index');
const Users = require('../routes/user');

const Routes = () => {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    });

    //Do not touch this code haha
    app.use(body.json());
    app.use(body.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
        res.redirect('/index');
    });

    app.use('/index', Main);
    app.use('/users', Users);

    app.use((req, res) => {
        res.status(404);
        let status = { ok: false, code: res.statusCode, message: "Página não encontrada" };

        res.send(JSON.stringify(status));
    });
}

module.exports = Routes();