const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

require('dotenv').config();

const weatherData = require('./data/weather.json');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

// app.get('/', (request, response) => {
//   response.send('greetings earthlings');
// });

app.get('/weather-data', (request, response) => {
  try {
      let city = weatherData.city_name;
      let lat = weatherData.lat;
      let lon = weatherData.lon;
      let dailyForecast = weatherData.data.map(element => new DailyForecast(element.weather.description, element.valid_date));
      console.log(weatherData.data);
      response.json(dailyForecast)
  } catch {
    response.status(500).send('Internal error!')
  }
});

// pass parameters from front end to back end - lat, lon, citySearched
// set up constants for parameters
// make superagent call to weather API

class DailyForecast {
  constructor(description, date) {
    this.description = description;
    this.date = date;
  }
}

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
