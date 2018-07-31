var express = require('express');
var http = require('http');
var app = express();

// A rota chama a seleção no banco e libera o acesso
// Trabalhar nas rotas

const json = [
    Database = {
        "host": 'ok',
        "port": 'ok'
    }
]

app.listen(8080);

module.exports.Routes = () => {
    app.get('/auth/:id', (req, res) => {
        res.writeHead(200, {"Content-Type":"application/json"});
        res.write(JSON.stringify(json));
        res.end();
    });

    // http.createServer((req, res) => {
    //     res.writeHead(200, {"Content-Type":"application/json"})
    //     res.write(JSON.stringify(json));
    //     res.end();
    // }).listen(8080);    
}