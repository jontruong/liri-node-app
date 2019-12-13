
const spotifyApi = {
  id: process.env['SPOTIFY_ID'],
  secret: process.env['SPOTIFY_SECRET']
};

const apiData = {
  bandsInTownId: process.env.BIT_ID,
  // omdbApi: process.env.OMDB_API
};

module.exports = { spotifyApi, apiData }