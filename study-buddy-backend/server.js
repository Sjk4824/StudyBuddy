const express = require("express"); 
const app = express(); 
const routeUrls = require("./Routes/routes"); 
const cors = require("cors"); 


//middlewares
app.use(express.json()); 
app.use(cors()); 
app.use("/app", routeUrls); 



app.listen(4000, (req, res)=>{
    console.log("Server up and running on port 4000!");
});
