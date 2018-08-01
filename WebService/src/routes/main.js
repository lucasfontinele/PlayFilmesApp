require('colors');
var express = require('express');
var http = require('http');
var app = express();
var Con = require('../models/DatabaseModel');

// A rota chama a seleção no banco e libera o acesso
// Trabalhar nas rotas

var con = Con.Local;

app.listen(8080);

module.exports.Routes = () => {
    console.log("[+] Started WebService at http://localhost:8080".green);

    app.get('/', (req, res) =>{
        res.send("<h1>This service are unavailable</h1>");
    });
    
    app.get('/verifyusers/:user/:pass', (req, res) => {
        con.query("SELECT * FROM users WHERE username = '"+req.params.user+"' AND password = '"+req.params.pass+"'", (err, resp) => {
            if (!err) {
                if (resp[0].lenght > 0) {
                    res.json("success");
                    console.log("aa");
                }
                else {
                    res.json("error");
                    console.log("aa");
                }
            }
            else {
                console.log("[x] Erro ao autenticar usuário =>\n" + err.message);
            }
        });
        res.end();
    });
}