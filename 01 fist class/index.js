//Initilizing express
const express = require("express");
const app = express();

//Active server on port
app.listen(3000, ()=>{
    console.log("Server is live on port", 3000)
});
