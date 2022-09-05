const express = require ('express')
const mongoose = require('mongoose')
const app = express();

// this a cool to the model I created for the artist info
const artistModel = require("./models/artist.js")

//basic express server

app.use(express.json())

//aquired the server code from mongodb
mongoose.connect("mongodb+srv://user1:money777@cluster0.6ypzfec.mongodb.net/enigma?retryWrites=true&w=majority",
 {
  useNewUrlParser: true,
}
);

//get request asking for our app to get the server, and add new artist
app.get("/", async (req, res) => {
  const artist = new artistModel({artistName:"Kendrick Lamar", hitSongs:10})

// test to ensure it's running smoothly.
  try {
    await artist.save();
  } catch(err) {
    console.log(err)
  }

});


//set the port where we're listening from
app.listen(3001, () => {
  console.log("server running on port 3001");
});
