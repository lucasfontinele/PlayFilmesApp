'use strict';

const express = require('express');
var router = express.Router();
var Database = require('../models/DatabaseModel').Local;

router.get('/:name/:pass', (req, res) => {
    var username = req.params.name;
    var password = req.params.pass;

    if (username != "" || password != "") {
        Login(username, password, status => {
            res.send(JSON.stringify({ status }));
        });
    }
});

router.post('/auth', (req, res) => {
    var username = req.body.name;
    var password = req.body.pass;

    if (username != "" || password != "") {
        Login(username, password, status => {
            res.send(JSON.stringify({ status }));
        });
    }
});

var Login = (Username, Password, callback) => {
    let postData = [Username, Password];

    Database.query("SELECT * FROM users WHERE username = ? AND password = ?", postData, (err, res) => {
        if (!err) {
            if (res.length > 0)
                callback({ ok: true });
            else
                callback({ ok: false });
        }
        else {
            console.log("[x] Erro ao autenticar usuário =>\n" + err.message);
        }
    });
}

module.exports = router;