const express = require("express");


const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", function(req, res) {
   res.sendFile(__dirname + "/index.html");
});

app.get("/Dog", function(req, res) {
   res.sendFile(__dirname + "/dog.html");
});

app.get("/Dice", function(req, res) {
   res.sendFile(__dirname + "/dice.html");
});

app.listen(process.env.PORT || port, function(){
    console.log("listening on port 3000");
});

