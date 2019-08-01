var db = require("../models/haiku.js");

module.exports = function (app) {

  // Get all haiku
  app.get("/api/all", function (req, res) {
    Haiku.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Add a haiku
  app.post("/api/new", function (req, res) {

    console.log("Chirp Data:");
    console.log(req.body);

    Haiku.create({
      author: req.body.author,
      haiku: req.body.body,
      created_at: req.body.created_at
    }).then(function (results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

  app.delete("/api/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

};
