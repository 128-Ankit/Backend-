//Initilizing express
const express = require("express");
const app = express();

//used to parse req.body in express -> PUT or POST
const bodyParser = require("body-parser");

//specifically parse JSON data and add it to the request.body object
app.use(bodyParser.json());

//Routes
//get request
app.get("/", (req, res) => {
    res.send("Wow! server is live now, and it's working!");
});

//post req
app.post("/api/cars",(req,res) => {
    const{name, brand} =req.body;
    console.log(name);
    console.log(brand);
});

//Active server on port
app.listen(3000, ()=>{
    console.log("Server is live on port", 3000)
});
