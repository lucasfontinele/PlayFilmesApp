require('colors');
var express = require('express');
var http = require('http');
var app = express();
global.Con = require('../models/DatabaseModel');

global.con = Con.Local;
global.retorno = "";

app.listen(8080, "192.168.0.10");

module.exports.Routes = () => {
    console.log("[+] Started WebService at http://localhost:8080".green);

    app.get('/', (req, res) =>{
        res.send("<h1>This service are unavailable</h1>");
    });
    //Realizar consulta via post
    app.get('/verifyusers/:user/:pass', (req, res) => {
        Login(req.params.user, req.params.pass, status => {
            res.send(JSON.stringify(status));
            res.end();
        });
    });
}
Login = function(User, Pass, callback) {
    con.query("SELECT * FROM users WHERE username = '"+User+"' AND password = '"+Pass+"'", async (err, resp) => {
        if (!err) {
            if (resp.length > 0)
                callback("success");
            else
                callback("error");
        }
        else {
            console.log("[x] Erro ao autenticar usuário =>\n" + err.message);
        }        
    });
}