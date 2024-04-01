const mongoose = require("mongoose");
require('dotenv').config();


const connect = () => {
    mongoose.connect(process.env.DB_URL, {

    }).then(()=>{
        console.log("DB Connection Successful");
    })
    .catch((err)=> {
        console.log("DB Connection Failed: ", err);
        process.exit(1);
    });
};
module.exports = connect;
