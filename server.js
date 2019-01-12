// Various package requirements
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// Set variable to store user data
const reservations = [
    // {
    //     routeName: "tables",
    //     customerName: "",
    //     phoneNumber: "",
    //     customerEmail: "",
    //     customerId: ""
    // }
];

const waitlist = [
    // {
    //     routeName: "tables",
    //     customerName: "",
    //     phoneNumber: "",
    //     customerEmail: "",
    //     customerId: ""
    // }
]

// Set routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/api/tables', function(req, res) {
    return res.json(reservations);
});

app.get('/api/waitlist', function(req, res) {
    return res.json(waitlist);
})

  
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});


// Post user data to server
app.post("/api/tables", function(req, res) {
    let newtable = req.body;
    newtable.routeName = newtable.customerName.replace(/\s+/g, "").toLowerCase();
    console.log(newtable);

    if (reservations.length < 5) {
        reservations.push(newtable);
        console.log('pushed to reservations');
    } else {
        waitlist.push(newtable);
        console.log('pushed to waitlist');
    }

    // console.log('Reservations\r\n' + reservations);
    // console.log('Waitlist\r\n' + waitlist);

    res.json(newtable);
});
