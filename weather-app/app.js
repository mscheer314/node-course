const request = require('postman-request');
const config = require('./config');

const location = 'Chicago';
const weatherUrl = `http://api.weatherstack.com/current?access_key=${config.weatherApiKey}&query=37.8267,-122.4233&units=f`;
const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${config.mapboxApiKey}&limit=1`;

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service');
  } else if (response.body.error) {
    console.log('something went wrong :(');
    console.log(response.body);
  } else {
    console.log(`It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
  }
});

// request({url: mapboxUrl, json: true}, (error, response) => {
//   console.log(response.body.features[0].center)
// })
