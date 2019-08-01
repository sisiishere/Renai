module.exports = function (sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
    //allowNull: false
    //validate: {
    //  len: [1]
    //}
  });
  return Example;

  //todo
  //add user table?
  //add haiku table?
  //discuss what tables we will need



};





