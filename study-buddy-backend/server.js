require("dotenv").config()
const express = require("express"); 
const cors = require("cors");  
const routeUrls = require("./Routes/routes"); 
const SpotifyWebApi = require("spotify-web-api-node");
const mongoose = require("mongoose");
const app = express();
const QuickLink = require("./models/quickLink");

app.use(express.json()); 
app.use(cors()); 

//Routes to be used by the app
app.use("/app", routeUrls); 
app.use(require("./Routes/loginUser")); 


//connect to the mongoDB atlas database. 
//remeber to hide the password of the database. 
mongoose.connect("mongodb+srv://Sjk4824:test@studybuddy.nv6oi.mongodb.net/userData?retryWrites=true&w=majority", {
  useNewUrlParser : true,
}); 


app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
      redirectUri: "http://localhost:3000/dashboard",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
    })
  
    spotifyApi
      .refreshAccessToken()
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
})

app.post("/login", (req, res) => {
    const spotifyApi = new SpotifyWebApi({
      redirectUri: "http://localhost:3000/dashboard",
      clientId: "5fa27e4a3af942029fb0ba0e62443013",
      clientSecret: "d22749d9094a4b46b858682f342476d5"
    });
    const code = req.body.code;
    spotifyApi.authorizationCodeGrant(code).then((data) => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in
        })
      })
      .catch(err => {
        res.sendStatus(400)
    })
})

const item1 = new QuickLink({
  mailID : "sad@gmail.com", 
  googleID : 12345, 
  quickLink : [{resourceName : "insta" , url : "https://www.instagram.com"}, {resourceName : "youtube" , url : "https://www.youtube.com"}]
}); 

const item2 = new QuickLink({
  mailID : "sewqweqwe@gmail.com", 
  googleID : 78910, 
  quickLink : [{resourceName : "iris" , url : "https://www.iris.com"}, {resourceName : "pintrest" , url : "https://www.pintrest.com"}]
}); 


app.listen(4000, (req, res)=>{
    console.log("Server up and running on port 4000!");
});
