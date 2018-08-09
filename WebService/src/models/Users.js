const Database = require('../models/DatabaseModel').Local;

function GetUserByName(Name) {
    Database.query(`SELECT * FROM users WHERE username = ${Name};`, (err, res) => {
        if (!err) {
            return res;
        }
    });
}