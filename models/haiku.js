// This file will conenct to our sequelize database and will repretent a table structure for all our haiku's
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

function Haiku_app() {
    var Haiku = sequelize.define("haiku", {
        autho: Sequelize.STRING,
        haiku: Sequelize.STRING,
        created_at: Sequelize.DATE

    });
}
// var User = sequelize.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     }
// });

// Syncs with DB
Haiku.sync();
// return Haiku;

module.exports = Haiku_app;