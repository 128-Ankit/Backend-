const express = require("express");
const Router = express.Router();

//import Controllers
const {CreateTodo,
    GetAllTodos,
    GetSingleTodo,
    UpdateTodo,
    DeleteTodo
} = require("../controllers/Todo-Controller");

//define API routes
Router.post("/createTodo", CreateTodo);
Router.get("/getTodos", GetAllTodos);
Router.get('/getTodo/:id',GetSingleTodo);
Router.put('/updateTodo/:id', UpdateTodo);
Router.delete('/deleteTodo/:id', DeleteTodo);

module.exports = Router;
