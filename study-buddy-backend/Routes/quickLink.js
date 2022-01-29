const router = require("express").Router(); 
//import the quick link schema from the document. 
const mongoose = require("mongoose"); 
const QuickLink = require("../models/quickLink");

router.post("/add/quickLink", (req, res) => {
    const mailID = req.body.mailID; 
    const googleID = req.body.googleID; 
    const quickLink = req.body.quickLink; 

    //first search if user exists or not. 
    QuickLink.findOne({googleID : googleID} , (err, foundItem) => {
        //push the new quickLink to the array and save it 
        foundItem.quickLink.push(quickLink); 
        foundItem.save(); 
    }); 
})


