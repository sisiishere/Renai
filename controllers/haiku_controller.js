var router = express.Router();
// var haiku=require("../models/");


router.get("/", function (req, res) {
    cat.all(function (data) {
        var hbsObject = {
            haikus: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

