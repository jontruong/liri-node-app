//Require .env File//
require("dotenv").config();
//Links Key Page//
const keys = require("./keys");
//Require File Systems//
const fs = require('fs');
//Require Moment
const moment = require('moment');
// Spotify Initialization//
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotifyApi);
// Require Request//
const request = require('request');
//OMDB API//
 const omdb = keys.omdbApi;
//bandsintown API//
const bandsInTown = keys.bandsInTownId;



//Take User Command and Input//
var command = process.argv[2];
var input = process.argv.slice(3).join(' ');

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
    request("https://rest.bandsintown.com/artists/" + input + "/events?app_id=" + bandsInTown, function(error,response,body){
        if(!error && response.statusCode === 200){
            let userBand = JSON.parse(body);
            if(userBand.length > 0){
                for ( i = 0; i < 1; i++) {
                    console.log(`Artist: ${userBand[i].lineup}\nVenue: ${userBand[i].venue.name}\n ${userBand[i].venue.country}\n ${userBand[i].venue.region}\n ${userBand[i].venue.city}\n ${userBand[i].venue.latitude}\n ${userBand[i].venue.longitude}`);
                }
                let eventDate = moment(userBand[i].datetime).format("MM/DD/YY hh:00 A");
                console.log(`Date and time: ${eventDate}\n\n`);
            } else {
                console.log("Band or concert not found!");
            };
        }
    });
}



///movie-this
function movieThis(){
request("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=" + omdb, function(error,response,body){

let userMovie = JSON.parse(body);
let ratingsArr = userMovie.Ratings;
if(ratingsArr.length > 2){

}
if(!error && response.statusCode === 200){
console.log(``)
}
else{
    console.log("Movie not found")
}
})
///spotify this song
function spotifyThisSong(){
    if(!input){input = "the sign ace of base"};
    spotify.search({ type: "track", query:input, limit:1 }, function(error,data){
        if(error){
            return console.log('Error occurred: ' + error);
        }
        let spotifyArr = data.tracks.items;
        for( i = 0; i < spotifyArr.length; i++){
            console.log(`Artist: ${data.tracks.items[i].album.artists[0].name}\n Songs: ${data.tracks.items[i].name}\n Spotify Link: ${data.tracks.items[i].external_urls.spotify}\n Album: ${data.tracks.items[i].album.name}`);
        }
    })

}

///do what it says
// function doWhatItSays(){

    
// }