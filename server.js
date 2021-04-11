const express = require('express');
const cors = require('cors');

require('dotenv').config();

const weatherData = require('./data/weather.json');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

// app.get('/', (request, response) => {
//   response.send('greetings earthlings');
// });

app.get('/weather-data', (request, response) => {

  let city = weatherData.city_name;
  let lat = weatherData.lat;
  let lon = weatherData.lon;
  let dailyForecast = weatherData.data.map(element => new DailyForecast(element.weather.description, element.valid_date));
  console.log(weatherData.data);
  response.json(dailyForecast)
});

class DailyForecast {
  constructor(description, date) {
    this.description = description;
    this.date = date;
  }
}
