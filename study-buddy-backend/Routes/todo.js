const router = require("express").Router(); 
const mongoose = require("mongoose"); 
const quickLink = require("../models/quickLink");
const Todo = require("../models/todo");

//code to get all the todos 
router.get("/getalltodos", async (req, res) => {
    const googleID = req.query.googleID; 
    await Todo.findOne({googleID : googleID}, (err, foundItem) => {
        const todo = foundItem.todo; 
        res.send(todo); 
    }).clone().catch((err) => {
        console.log(err);
    })
}); 

router.post("/addtodo", async (req, res) => {
    const googleID = req.body.googleID; 
    await Todo.findOne({googleID : googleID}, (err, foundItem) => {
        const newTodo = {
            task : req.body.todo.task, 
            deadline : req.body.todo.deadline, 
        }
        let newArray = foundItem.todo; 
        newArray.push(newTodo); 

        const response = Todo.updateOne({googleID : googleID}, {todo : newArray}, (err) => {
            if(err){
                console.log(err); 
            }
        }); 
        res.send(newTodo); 
    }).clone().catch((err) => {
        console.log(err);
    })
})

router.put("/deletetodo", async (req, res) => {
    const googleID = req.body.googleID; 
    let newArray = req.body.updatedArray; 
    console.log(newArray); 
    await Todo.updateOne({googleID : googleID}, {todo : newArray}, (err) => {
        if(err){
            console.log(err);
        }
    }).clone().catch((err) => {
        console.log(err);
    })
    res.send(newArray); 
}); 

module.exports = router; 
