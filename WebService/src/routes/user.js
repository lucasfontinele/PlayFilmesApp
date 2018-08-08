const express = require('express');
const Login = require('../controllers/user');
var router = express.Router();

router.get('/:name/:pass', (req, res) => {
    var username = req.params.name;
    var password = req.params.pass;

    if (username != "" || password != "") {        
        res.send(Login(username, password));    
    } else {
        res.send(JSON.stringify({error: "parâmetros inválidos"}));
    }
});

module.exports = router;