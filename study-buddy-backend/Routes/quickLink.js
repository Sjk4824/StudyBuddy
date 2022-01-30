const router = require("express").Router(); 
const mongoose = require("mongoose"); 
const quickLink = require("../models/quickLink");
const QuickLink = require("../models/quickLink");

//get request to fetch all the todos from the database. 
router.get("/getallqlinks", async (req, res) => {
    const googleID = req.query.googleID; 
    await QuickLink.findOne({googleID : googleID} , (err, foundItem) => {

        //we get an array of the user's quicklinks
        const quickLink = foundItem.quickLink;
        res.send(foundItem.quickLink); 
    }).clone().catch((err) => {
        console.log(err);
    })
}); 

router.post("/addqlink", async (req, res) => {
    const googleID = req.body.googleID;
    await QuickLink.findOne({googleID : googleID} , (err, foundItem) => {

        const newLink = {
            resourceName : req.body.quickLink.resourceName, 
            url : req.body.quickLink.url, 
            imgUrl : req.body.quickLink.imgUrl
        }

        let newArray = foundItem.quickLink; 
        newArray.push(newLink); 

        const response = QuickLink.updateOne({googleID : googleID}, {quickLink : newArray}, (err) => {
            if(err){
                console.log("Operation was unsuccessful"); 
            }
        });

        res.send(newLink); 
    }).clone().catch((err) => {
        console.log(err);
    })
})

module.exports = router; 



