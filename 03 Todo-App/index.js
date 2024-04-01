const express = require("express");
const app = express();

const database = require('./utils/db');
//importing routes
const todoRoutes = require('./routes/todo-route');

require('dotenv').config();
const  PORT = process.env.PORT ||  3001;

//middleware to parse json request body
app.use(express.json());

//mount the Todo APIs Routes
 app.use('/api/v1', todoRoutes)


//db connection
database();

// app.use("/", (req, res) => {
//   res.send("this is for testing");
// });

//starts server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} !`);
});
