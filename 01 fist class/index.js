//Initilizing express
const express = require("express");
const app = express();

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
