const db = require('../models/DatabaseModel').Local;

GetUserByName = (Name) => {    
    db.query(`SELECT * FROM users WHERE username = ${Name};`, (err, res, fields, callback) => {
        if (!err) {
            console.log(res);
            return JSON.stringify( { res } );            
        }
    });    
}