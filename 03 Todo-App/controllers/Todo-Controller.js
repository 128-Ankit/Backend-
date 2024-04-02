//importing the model
const Todo = require("../models/Todo");

//Define :- Create Todo Route Handler
const CreateTodo = async (req, res) => {
  try {
    //fetch data from req body
    const { title, description } = req.body;

    //Create a entry  with the fetched data and save it to database
    const new_todo = await Todo.create({
      title: title,
      description: description,
    });

    //Send response back as json format
    return res.status(201).json({
      success: true,
      msg: "Todo Created successfully",
      data: new_todo,
    });
  } catch (error) {
    console.error("Error creating Todo:", error);
    res.status(400).json({
      success: false,
      msg: "Failed to create entry",
    });
  }
};

//Define :- Get all todos route handler
const GetAllTodos = async (req, res) => {
  try {
    //Fetch all todos from database
    const todos = await Todo.find({});
    console.log("All Todos", todos);

    //Return the result as a json response
    return res.status(200).json({
      success: true,
      msg: "Get All Todos Successful",
      count: todos.length,
      data: todos,
    });
  } catch (error) {
    console.error("Error Getting All Todos: ", error);
    res.status(500).json({
      success: false,
      msg: "Server Error to get all todos",
    });
  }
};

//Define :- Get single todo by id route handler
const GetSingleTodo = async (req, res) => {
  try {
    //extract todo on the basis of id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //Validation: is id valid or not
    if (!todo) {
      return res.status(404).json({
        success: false,
        msg: `No Todo with this ${id}`,
      });
    }

    //Response: if id is correct
    return res.status(200).json({
      success: true,
      msg: `Todo Found`,
      data: todo,
    });
  } catch (error) {
    console.error("Error Getting Single Todo: ", error);
    res.status(500).json({
      success: false,
      msg: `No Todo Found ${id}`,
    });
  }
};

//Define :- Update todo by id route handler
const UpdateTodo = async (req, res) => {
  try {
    //fetch todo items by id
    const { id } = req.params;
    //fetch title and description  from body
    const { title, description } = req.body;
    //update todo  item in database
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updatedAt: Date.now(),
      }
    );
    //return response
    return res.status(201).json({
      success: true,
      msg: "Todo Updated Successfully",
      data: todo,
    });
  } catch (error) {
    console.log("Error Updating Todo : ", error);
    res.status(500).json({
      success: false,
      msg: "Todo Not Updated Successfully",
    });
  }
};

//Define :- Delete todo by id route handler
const DeleteTodo = async (req, res) => {
  try {
    //fetch todo items by id
    const { id } = req.params;
    //Delete todo from database
    await Todo.findByIdAndDelete(id);
    //return response
    return res.status(201).json({
      success: true,
      msg: "Todo Delete Successfully",
    });
  } catch (error) {
    console.log("Error Delete Todo : ", error);
    res.status(500).json({
      success: false,
      msg: "Todo Not Delete Successfully",
    });
  }
};

module.exports = {
  CreateTodo,
  GetAllTodos,
  GetSingleTodo,
  UpdateTodo,
  DeleteTodo,
};
