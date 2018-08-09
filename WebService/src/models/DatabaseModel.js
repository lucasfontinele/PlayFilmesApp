const Mysql = require("mysql");
const Config = require("../../config/config");

/**
 * Assign the project to an employee.
 * @param {Object} Local - Abre a conexão local
 */

var Local = exports.Local = Mysql.createConnection({
    host : Config.config.host,
    port : Config.config.port,
    user : Config.config.user,
    password : Config.config.pass,
    database : Config.config.data
});

function DatabaseConnect() {
    Local.connect(error => {
        try {
            if (error) {                            
                setTimeout(function(){
                    console.log("[i] Tentando reestabelecer a conexão. [MYSQL Local]".red);    
                    DatabaseConnect();         
                }, 3000);    
            }
            else {
                console.log("[+] Conectado [MySQL]".green);
            }   
        }        
        catch(err) {
            console.log("Ocorreu um erro:\n" + err.message);
        }
    });
}

//Manter conexão
setInterval(() => {
    Local.query("SELECT 1;");
}, 5000 * 60); // Try reconnect after 5 minutes

process.on('uncaughtException', errp => {
    if (errp == "PROTOCOL_CONNECTION_LOST") {
        if(con.state != "authenticated") {
            console.log("[x] A conexão com o banco de dados foi perdida! [MySQL]".red);
            Local.end();            
        }                
    }
});

DatabaseConnect();