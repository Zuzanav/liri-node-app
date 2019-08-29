# liri-node-app
An app called LIRI Bot (Language Interpretation and Recognition Interface) that takes in user commands to search for songs, movies or band tour dates by retrieving data from the Spotify, OMDB, and Bands in Towns API's. 


# How to Use

1. Open your terminal/Bash

2. Make your way to the liri.js file

3. Select one of the following commands to run:

`concert-this`
`spotify-this-song`
`movie-this`
`do-what-it-says`

__Note:__ For spotify make sure to put quotations around the song name if you're looking for a specific song, 
or no quotes if you're looking for a song with a specific word in the song title.


4. Once selected, type the a command into the terminal. Look at each command below and their results.
*Example*  `node liri.js spotify-this-song <name of song>`


# Commands

## Spotify-This-Song

`node liri.js spotify-this-song <name of song>`

![Spotify Results](/screenshots/spotify.png)


## Concert-This
This command will give you multiple outputs if the band has more than 1 scheduled concert
`node liri.js concert-this <name of band>`

![Concert Results](/screenshots/band.png)

## Movie-This
`node liri.js movie-this <name of movie>`

![Movie Results](/screenshots/movie.png)

## Do-What-It-Says
`node liri.js do-what-it-says`

![Random Result](/screenshots/random.png)


# TECHNOLOGIES USED
- Javascript
- Node.js

- Node packages:
    - Moment
    - DotEnv
    
- APIs used:
    - Bands in Town
    - OMDB
    - Spotify
