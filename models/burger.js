// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var BURGERS = {
    selectAll: function(cb) {
    orm.selectAll("BURGERS", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("BURGERS", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("BURGERS", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgerController.js).
module.exports = BURGERS;
