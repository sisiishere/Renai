module.exports = function (sequelize, DataTypes) {
    var Haiku = sequelize.define("Haiku", {
        haiku: DataTypes.STRING,
        author: DataTypes.TEXT,
        likes: DataTypes.INTEGER//keep track of the number of likes that haiku recieves
    });
    return Haiku;
};