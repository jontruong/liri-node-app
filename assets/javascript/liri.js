//Require .env File//
require("dotenv").config();

//Links Key Page//
var keys = require("./keys.js");

//Require File Systems//
const fs = require('fs');

// Spotify Initialization//
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);

//OMDB//
let omdb = (keys.omdb)

//bandsintown//
let bandsInTown = (keys.bandsInTown)

var axios = require('axios');

//Take User Command and Input//
var userCommand = process.argv[2];
var input = process.argv[3].slice(2).join(' ');




///concert-this
// axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
//   function(response) {
//     console.log(response.data);
//   })




///movie-this
  axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function(response) {
      console.log("The movie's rating is: " + response.data.imdbRating);
    })
  

///spotify this song




///do what it says