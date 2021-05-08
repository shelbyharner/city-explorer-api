const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

require('dotenv').config();

const getWeatherData = require('./modules/weather.js');
const getMovieData = require('./modules/movie.js');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/weather-data', getWeatherData);

app.get('/movie-data', getMovieData);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
