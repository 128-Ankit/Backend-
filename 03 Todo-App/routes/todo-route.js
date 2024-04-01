const express = require("express");
const Router = express.Router();

//import Controllers
const CreateTodo = require("../controllers/Todo-Controller");

Router.post("/createTodo", CreateTodo);

Router.use("/", (req, res) => {
  res.send("this is for testing for createTodo");
});
//define API routes

module.exports = Router;
