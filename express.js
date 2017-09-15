<<<<<<< HEAD
=======
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

var charecters=[];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));





app.get("/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    });
app.get("/reservation.html", function(req, res) {
        res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables.html", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});






 
app.post("/api/table", function(req, res) {
  var newrequest = req.body;
  newrequest.routeName = newrequest.name.replace(/\s+/g, "").toLowerCase();

 console.log(newrequest);

 characters.push(newrequest);

 res.json(newrequest);
});

app.get("/api/WaitList", function(req, res){
    var list = req.params.reservations;

    if(list) {
        console.log(list);
        for (var i = 0 ; i < reservations.length; i++){
            if(list === reservations[i]) {
                return res.json(reservations[i]);
            }
        }
        return res.json(false);
    }
    return res.json(reservations);
})



app.listen(PORT, function() {
    console.log("App Listening on port " + PORT);
})


>>>>>>> 5b1dfb4bba9e4b2e7e813964f0c94114147e5f3c
