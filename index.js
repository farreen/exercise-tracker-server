"use strict";

const express =  require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const exerciseRouter = require("./src/routes/exercises-route");
const usersRouter = require("./src/routes/users-route");

//const connect = require("./src/config/connect")

const app = express();
const port  = 5000
app.use(cors());
app.use(express.json());

app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);


mongoose.connect("mongodb://127.0.0.1:27017/mydb");
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connected")
})


app.listen(port, () => {
   //connect();
    console.log(`Server is running on port: ${port}`)
});
