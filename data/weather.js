const superagent = require('superagent');

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

class newForecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}

const getWeatherData = (request, response) => {
  const query = {
    // lat: request.query.lat,
    // lon: request.query.lon,
    city: request.query.city,
    key: WEATHER_API_KEY
  };

  const city = request.query.city

  const url = `http://api.weatherbit.io/v2.0/forecast/daily`
  superagent
    .get(url)
    .query(query)
    .then(results => {
      // console.log(results.body.data)
      response.status(200).send(results.body.data.map(
        day => 
        new newForecast(day.valid_date, day.weather.description)
        ));
    }).catch(error => {
      response.status(500).send('Internal error', error);
  });
}

module.exports = getWeatherData;
