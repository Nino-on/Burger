//Use This to make basic connection
var express = require("express");
var exphbs = require("express-handlebars");
const mysql=require("mysql");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection=mysql.createConnection({
    host:"localhost",
    port:8889,
    user:"root",
    password:"root",
    database:"Burgers_db"
});

connection.connect(function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL successfully!");
    }
});


