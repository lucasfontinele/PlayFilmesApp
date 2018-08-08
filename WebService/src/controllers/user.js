var Database = require('../models/DatabaseModel').Local;

var Login = (Username, Password) => {
    Database.query(`SELECT * FROM users WHERE username = ${Username} AND password = ${Password}`, (err, res) => {
        if (!err) {
            if (res.length > 0)
                callback({ok: true});
            else
                callback({ok: false});
        }
        else {
            console.log("[x] Erro ao autenticar usuário =>\n" + err.message);
        }                    
    });    
}

module.exports = Login(Username, Password);