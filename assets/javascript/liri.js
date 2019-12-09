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
var command = process.argv[2];
var input = process.argv[3].slice(2).join(' ');

//Switch between commands//
function userCommand(command,input){
switch(command){
    case "concertThis":
        concertThis();
        break;
    case "spotifyThisSong":
        spotifyThisSong();
        break;
    case "movieThis":
        movieThis();
        break;
    case "doWhatItSays":
        doWhatItSays(input);
        break;
    default:
        console.log("Please try again");
        break;
    }
}
userCommand(command,input);



///concert-this
function concertThis(){

axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log(response.data);
  })
}



///movie-this
function movieThis(){

}
;//   axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//     function(response) {
//       console.log("The movie's rating is: " + response.data.imdbRating);
//     })
  

///spotify this song
function spotifyThisSong(){


}




///do what it says
function doWhatItSays(){

    
}