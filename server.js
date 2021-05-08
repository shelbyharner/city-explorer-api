const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

require('dotenv').config();

const weatherData = require('./data/weather.json');
const getWeatherData = require('./data/weather.js');
const getMovieData = require('./data/movie.js');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/weather-data', (request, response) => {
  // try {
  //     let city = weatherData.city_name;
  //     let lat = weatherData.lat;
  //     let lon = weatherData.lon;
  //     let dailyForecast = weatherData.data.map(element => new DailyForecast(element.weather.description, element.valid_date));
  //     console.log(weatherData.data);
  //     response.json(dailyForecast)
  // } catch {
  //   response.status(500).send('Internal error!')
  // }
  try {
    getWeatherData(request, response)
  } catch {
    response.status(500).send('Internal error!')
  }
});

app.get('/movie-data', (request, response) => {
  try {
    getMovieData(request, response)
  } catch {
    response.status(500).send('Internal error!')
  }
});

class DailyForecast {
  constructor(description, date) {
    this.description = description;
    this.date = date;
  }
}

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
