const express = require("express");
const cors = require("cors"); //vivlio8hkh gia na mas epitrepei ta cross origin requests
const app = express();
const products = require("./products.json");
require('dotenv').config(); //dhmiourgei environment opws h angular/documentation https://www.npmjs.com/package/dotenv

app.listen(3000); //orizoume se poia porta 8a akouei to app
app.use(cors());


//Routing System
app.get("/",(req, res) => {
    res.sendFile(__dirname+"/views/home.html"); // h __dirname dinei to path
});

app.get("/products",(req, res) => {
    res.json(products);
});

app.get("/product/:product_id",(req, res) => {
    const id = req.params.product_id;
    let productfound = {message:"product not found"};
    for(let p of products){
        if(p._id == id) {
            productfound = p;
            return res.json(productfound);
        }
    }
    res.json(productfound);
});

app.get("/product-v2/:product_id",(req, res) => {
    const id = req.params.product_id;
    const productfound = products.find(p =>p._id == id);
        res.json(productfound);
});
