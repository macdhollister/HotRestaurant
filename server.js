// Various package requirements
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// Set variable to store user data
  var reservations = [
    {
      routeName: "tables",
      customerName: "",
      phoneNumber: "",
      customerEmail: "",
      customerId: ""
    },
];

// Set routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

// Post user data to server
app.post("/api/tables", function(req, res) {
    var newtable = req.body;
    newtable.routeName = newtable.customerName.replace(/\s+/g, "").toLowerCase();
    console.log(newtable);
    reservations.push(newtable);
    res.json(newtable);
});
