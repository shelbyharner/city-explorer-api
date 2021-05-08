const superagent = require('superagent');

class newMovie {
  constructor(title, overview, average_votes, total_votes, image_url, popularity, released_on) {
    this.title = title;
    this.overview = overview;
    this.average_votes = average_votes;
    this.total_votes = total_votes;
    this.image_url = image_url;
    this.popularity = popularity;
    this.released_on = released_on;
  }
}

const getMovieData = (request, response) => {
  const query = {
    api_key: process.env.MOVIE_API_KEY,
    query: request.query.city
  };

  const url = `https://api.themoviedb.org/3/search/movie`
  superagent
    .get(url)
    .query(query)
    .then(results => {
      console.log(results.body.results)
      response.status(200).send(results.body.results.map(
        movie => 
        new newMovie(movie)
      ));
    }) .catch (error => {
      response.status(500).send(error);
  });
}

module.exports = getMovieData;
