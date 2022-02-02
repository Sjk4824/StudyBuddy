const mongoose = require("mongoose"); 

const ToDoSchema = new mongoose.Schema({
    googleID : Number, 
    todo : [{task : String, deadline : Date}]
}); 

module.exports = new mongoose.model("todoData", ToDoSchema);
