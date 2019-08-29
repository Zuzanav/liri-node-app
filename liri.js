//======================================================================

// REQUIRES ----------------------------------------------

require('dotenv').config();
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require('moment');

//======================================================================

// VARIABLES -----------------------------------------------

// variable User Command 
var userCmd = process.argv[2];

// variable User Input
var userInput = process.argv[3];

//========================================================================

// SWITCH FUNCTION 'commands' with arguments User Command and User Input
commands(userCmd, userInput);

function commands () {
    switch(userCmd) {
        case "spotify-this-song":
        songInfo(userInput);
        break;

        case "concert-this":
        bandInfo(userInput);
        break;

        case "movie-this":
        movieInfo(userInput);
        break;

        case "do-what-it-says":
        random(userInput);
        break;

        default:
        console.log("please put in a correct command");
        break;
    }
}
//========================================================================

// SPOTIFY -------------------------------------------------------------
function songInfo(userInput) {
    if (userInput === undefined) {
        userInput = "The Sign";
    }

spotify.search({ 
    type: 'track', 
    query: userInput,

    }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }

       var jsonData = data.tracks.items[0];

        var songData = [
            "-----------------------------------",
            "ARTIST: " + jsonData.artists[0].name,
            "SONG NAME: " + jsonData.name,
            "ALBUM " + jsonData.album.name,
            "PREVIEW LINK: " + jsonData.external_urls.spotify,
            "------------------------------------",
        ].join("\n\n");
        console.log(songData);
    }
    );
};

//========================================================================

// OMDB -------------------------------------------------------------
function movieInfo(userInput) {
    if (userInput === undefined) {
        userInput = "Mr. Nobody";
    }

    var URL = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

    axios.get(URL).then(function(response) {
        var movieData = response.data
        console.log("-------------------------------\n");
        console.log("MOVIE TITLE: " + movieData.Title + '\n');
        console.log("RELEASE: " + movieData.Year + '\n');
        console.log("IMDB RATING: " + movieData.Ratings[0].Value + '\n');
        console.log("ROTTEN TOMATOES RATING: " + movieData.Ratings[1].Value + '\n');
        console.log("COUNTRY: " + movieData.Country + '\n');
        console.log("LANGUAGE: " + movieData.Language + '\n');
        console.log("PLOT: " + movieData.Plot + '\n');
        console.log("ACTORS: " + movieData.Actors + '\n');
        console.log("-------------------------------");
    })
    .catch(function(error) {
        if (error.response){
            console.log(error);
        };
    })
}

//========================================================================

// BANDS IN TOWNS ----------------------------------------------------
function bandInfo(userInput) {

var URL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";

axios.get(URL).then(function(response) {

    var bandData = response.data 
   
    for (var i = 0; i < bandData.length; i++){
    
    console.log("-------------------------------\n");
    console.log("VENUE: " + bandData[i].venue.name + '\n');
    console.log("LOCATION: " + bandData[i].venue.city + '\n');

    let actualTime =  moment(bandData[i].datetime).format('L');

    console.log("DATE: " + actualTime + '\n');

    console.log("-------------------------------");
    }

   
})
.catch(function(error) {
    if (error.response){
        console.log(error);
    };
})

}

//========================================================================

// DO WHAT IT SAYS --------------------------------------------------
function random() {

    fs.readFile("random.txt", "utf8", function(error, data) {

        // If an error was experienced we will log it.
        if (error) {
          console.log(err);
        }
      
        data = data.split(",");

        songInfo(data[1]);
        
      });

};


