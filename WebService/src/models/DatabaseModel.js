const mysql  = require('mysql');
const config = require('../config/config').Database;

var con = mysql.createConnection({
    host: config.host,
    password: config.pass,
    port: config.port,
    database: config.data
});

con.connect(err => {
    if (err) {
        console.log("[-] Erro ao tentar estabelecer uma conexão MySQL".red);
        setTimeout(() => {
            console.log("[i] Tentando reconectar-se".blue);
            ConnectDatabase();
        }, 2000);
    }
    else {
        console.log("[+] Conectado ao banco de dados".green);
    }
});