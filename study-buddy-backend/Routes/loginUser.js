const express = require("express"); 
const router = express.Router(); 
const axios = require("axios"); 
const QuickLink = require("../models/quickLink");

router.get("/loginuser", async (req, res) => {
    
        await QuickLink.findOne({googleID : req.query.googleID} , (err, foundItem) => {
            //push the new quickLink to the array and save it 
            if(!foundItem){
                //if such a user never existed wonly 
                //make a user and set their quicklinks and todos to 0. 
                const item = new QuickLink({
                    googleID : req.query.googleID, 
                    quickLink : [], 
                }); 
                item.save(); 
            }
        }).clone().catch((err) => {
            console.log(err);
        })
}); 

module.exports = router; 