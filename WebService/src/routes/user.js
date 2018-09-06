'use strict';
require('colors');
const express = require('express');
var router = express.Router();
var db = require('../models/DatabaseModel').Local;

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

    db.query(`SELECT password FROM users WHERE username = '${postData.user}'`, (err, res) => {                
        if (!err) {
            let password = res[0].password;

            if (res.length > 0) {                                
                if (password == postData.pass) {
                    callback({ ok: true, token: "x"});
                } else {
                    callback({ ok: false });
                }                
            }
            else {
                callback({ code: 200, ok: false, message: "user not found" });
            }
        }
        else {
            callback({ code: 200, ok: false, message: "user not found" });
        }
    });
    // db.query(`SELECT password FROM users WHERE username = '${postData.user}' AND password = '${postData.pass}'`, (err, res) => {
    //     if (!err) {
    //         if (res.length > 0) {
    //             callback({ code: 200, ok: true });
    //         }                
    //         else {
    //             callback({ code: 200, ok: false });
    //         }                
    //     }
    //     else {
    //         console.log("[x] Erro ao autenticar usuário =>\n" + err.message);
    //     }
    // });
}

module.exports = router;