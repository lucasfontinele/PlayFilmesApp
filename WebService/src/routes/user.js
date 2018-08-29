'use strict';
require('colors');
const express = require('express');
const getUser = require('../models/Users');
var router = express.Router();
var db = require('../models/DatabaseModel').Local;

router.get('/getUserByName/:user', (req, res) => {
    console.log(req.params.user);
    getUser.GetUserByName("OldFl4sh");
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

router.post('/register', (req, res) => {
    var username = req.body.name;
    var password = req.body.pass;

    if (username != "" || password != "") {
        Register(username, password, status => {
            res.send(JSON.stringify({ status }));
        });
    }
});

var Register = (username, password, callback) => {
    let postData = [username, password];

    db.query("INSERT INTO users(username, password) VALUES(?, ?)", postData, (err, res) => {
        if (!err && res[0].length > 0) {
            callback({ code: 200, ok: true });
        }
        else {
            callback({ code: 200, ok: false });
            console.log(("[*] Tentativa de inserção com erro:".yellow) + '\n' + err.message);
        }
    });
}


var Login = (Username, Password, callback) => {
    let postData = {
        user: Username, 
        pass: Password
    };

    db.query(`SELECT * FROM users WHERE username = '${postData.user}' AND password = '${postData.pass}'`, (err, res) => {
        if (!err) {
            if (res.length > 0) {
                callback({ code: 200, ok: true });
            }                
            else {
                callback({ code: 200, ok: false });
            }                
        }
        else {
            console.log("[x] Erro ao autenticar usuário =>\n" + err.message);
        }
    });
}

module.exports = router;