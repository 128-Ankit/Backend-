const express = require("express");
const app = express();
require('dotenv').config();

const  PORT = process.env.PORT ||  3001;
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

app.post("/register", (req, res) => {
  res.send("registration successfully");
});


app.post("/login", (req, res) => {
  res.send("login successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} !`);
});
