const superagent = require('superagent');

class DailyForecast {
  constructor(description, date) {
    this.description = description;
    this.date = date;
  }
}
