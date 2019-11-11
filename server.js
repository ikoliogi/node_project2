const express = require("express");
const app = express();
app.listen(3000); //orizoume se poia porta 8a akouei to app

//Routing System
app.get("/",(req, res) => {
    res.sendFile(__dirname+"/views/home.html"); // h __dirname dinei to path
});

app.get("/about",(req, res) => {
    res.send("<h1>About Page</h1>");
});

app.get("/contact",(req, res) => {
    res.send("<h1>Contact Form</h1>");
});
