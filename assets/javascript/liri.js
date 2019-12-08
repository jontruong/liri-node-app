
require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var axios = require('axios');

var firstCommand= process.argv[2];
var secondCommand = process.argv[3];
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log(response.data);
  })
