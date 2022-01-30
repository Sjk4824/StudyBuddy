//make the schema for the quickLink
const mongoose = require("mongoose"); 

//user and their respective todos. 
const QuickLinkSchema = new mongoose.Schema({
    googleID : Number, 
    quickLink : [{resourceName : String, url : String, imgUrl : String}]
}); 

module.exports = new mongoose.model("quickLinkData", QuickLinkSchema);

