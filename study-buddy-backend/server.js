require("dotenv").config()
const express = require("express"); 
const cors = require("cors");  
const routeUrls = require("./Routes/routes"); 
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
//middlewares
app.use(express.json()); 
app.use(cors()); 
app.use("/app", routeUrls); 


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

app.listen(4000, (req, res)=>{
    console.log("Server up and running on port 4000!");
});
