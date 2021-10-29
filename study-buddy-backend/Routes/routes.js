const express = require("express"); 
const router = express.Router(); 
const axios = require("axios"); 

//make a get request to tht website
router.get("/favicon", async (req, res) => {
    //obtain the url passed from the front end
    const url = req.query.url; 
    const result = await axios.get(`https://besticon-demo.herokuapp.com/allicons.json?url=${url}`);
    // let data = result.data; 
    // console.log(data);
    res.status(201).send(result.data)
}); 

module.exports = router; 
