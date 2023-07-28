const request = require('postman-request');
const config = require('../config');

const weather = (latitude, longitude, callback) => {
  const weatherUrl = `http://api.weatherstack.com/current?access_key=${config.weatherApiKey}&query=${longitude},${latitude}&units=f`;
  console.log(weatherUrl);
  const testUrl = `http://api.weatherstack.com/current?access_key=${config.weatherApiKey}&query=40.7831,-73.9712&units=f`;
  console.log(testUrl);
  request({ url: weatherUrl }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (response.body.success === false) {
      callback('something went wrong :(', undefined);
    } else {
      const thing = JSON.parse(response.body);
      callback(undefined, `It is currently ${thing.current.temperature} degrees out. It feels like ${thing.current.feelslike} degrees out.`);
    }
  });
};

module.exports = weather;
