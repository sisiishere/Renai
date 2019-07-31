

var orm = {

    //general database query we'll need to view all the haiku's for a profile
    //displayTable will be the table listing every users TOP POST
    viewNearbys: function (displayTable, cb) {
        var queryString = "SELECT * FROM " + displayTable + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    viewFive: function (id) {
        var queryString = "SELECT haiku_post, haiku_1, haiku_2, haiku_3, haiku_4, FROM profiles WHERE user_id = " + id + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // updateHaikuPost: function (table, haikuPosition, text, id) {
    //     var queryString = "UPDATE" + table
    // },


}
module.exports = orm;






}