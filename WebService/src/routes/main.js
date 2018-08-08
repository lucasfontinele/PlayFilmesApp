const express = require('express');
const app = express();
const port = 8080;
require('colors');

app.listen(port);
console.log(("[+] Started WebService at http://0.0.0.0:" + port).green);

const Index = require('../routes/index');
const Users = require('../routes/user');

const Routes = () => {            
    app.get('/', (req, res) => {
        res.redirect('/index');
    });
    
    app.use('/index', Index);        

    app.use('/users', Users);

    app.use((req, res) => {
        res.status(404);
        let status = {ok: false, code: res.statusCode, message: "Página não encontrada"};
        
        res.send(JSON.stringify(status));
    });
}


module.exports = Routes();

//Realizar consulta via post
        // app.get('/verifyusers/:user/:pass', (req, res) => {
        //     Login(req.params.user, req.params.pass, status => {
        //         res.send(JSON.stringify(status));
        //         res.end();
        //     });
        // });


// Login = function(User, Pass, callback) {
//     con.query("SELECT * FROM users WHERE username = '"+User+"' AND password = '"+Pass+"'", async (err, resp) => {
//         if (!err) {
//             if (resp.length > 0)
//                 callback("success");
//             else
//                 callback("error");
//         }
//         else {
//             console.log("[x] Erro ao autenticar usuário =>\n" + err.message);
//         }        
//     });
// }