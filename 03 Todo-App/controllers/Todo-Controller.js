//importing the model
const Todo = require("../models/Todo");

//Define : Create Todo Route Handler
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

//Update Todo
const UpdateTodo = async (req, res) => {
  try {
    //Fetch id from params
    const todo_id = req.params.id;
    console.log("todo id is: " , todo_id);

    //Find the todo in the database using the id
    const UpdatedTodo = await Todo.findByIdAndUpdate(todo_id);
    console.log("updated todo is: ",UpdatedTodo);
    res.status(200).json({
        success:true,
        msg:"Todo Updated successfully",
        data:UpdatedTodo
    })
  } catch (error) {
    console.error("Error updating Todo:", error);
    res.status(400).json({
      success: false,
      msg: "Failed to update Todo",
    });
  }
};

module.exports = { CreateTodo, UpdateTodo };
