var express = require("express");

var router = express.Router();

// Import the model (BURGERS.js) to use its database functions.
var BURGERS = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  BURGERS.selectAll(function(data) {
    var hbsObject = {
     BURGERS: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  BURGERS.insertOne([
    "Burger_Name", "Devoured "
  ], [
    req.body.Burger_Name,"0" ],
     function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  BURGERS.updateOne({
    Devoured:"1"
  },
   condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
