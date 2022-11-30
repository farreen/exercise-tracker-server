const mongoose = require("mongoose");

const connect = () => {
    const dbUrl = "mongodb://127.0.0.1:27017";
    const databaseName = "myDatabase";
    mongoose.connect(dbUrl, databaseName)
    .then(()=> {
        console.log("database connected");
    })
    .catch((err) => {
        console.log("could not connect to database", err);
    })

    console.log("inside connect");
}
export default connect;
