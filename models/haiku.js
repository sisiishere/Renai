// This file will conenct to our sequelize database and will repretent a table structure for all our haiku's
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Haiku = sequelize.define("haiku", {
    author: Sequelize.STRING,
    haiku: Sequelize.STRING,
    created_at: Sequelize.DATE

})

// Syncs with DB
Haiku.sync();

module.exports = Haiku;