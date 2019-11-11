const express = require("express");
const chalk = require("chalk");
const products = require("./products.json");
const app = express();

app.listen(5000); // nodemon app.js kai pleon sto localhost:5000 vlepoume ta parakatw:
app.get("/",(req, res) => {
    res.send("Welcome to our store");
});
app.get("/products",(req, res) => {
    res.json(products);
});

let sum = 0;
let max = products[0].price;
let min = products[0].price;

function find_price(price){
    sum = sum+price;
    if(price >= max) {
        max = price;
    }
    if (price < min){
        min = price;
    }
}

for(let p of products){
    if(p.sale){
        find_price(p.sale);
        console.log(p.name+": "+chalk.green(p.sale)+"€ Ekptwsh "+((1-p.sale/p.price)*100).toFixed(0)+"%");
    } else {
        find_price(p.price);
        console.log(p.name+": "+p.price+"€");
    }
}
console.log("sunolikh timh:"+sum+" kai mesos oros timwn "+sum/(products.length)+', megisth timh:'+max+' kai elaxisth timh:'+min);
