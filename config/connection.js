var mysql = require("mysql");
module.exports = function (mysql) {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 8080,
        user: "root",
        password: "",
        database: "haiku_db"
    })
}