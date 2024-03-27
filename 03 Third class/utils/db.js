const mongoose = require("mongoose");
const express = require("express");
mongoose.connect("mongodb://localhost:27017/carDB", {
})
    .then(() => {
        console.log("db connection successful");
    })
    .catch((error) => {
        console.log("db connection failed");
    });