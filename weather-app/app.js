const geocode = require('./utils/geocode');
const forecast = require('./utils/weather');
// const weatherUrl = `http://api.weatherstack.com/current?access_key=${config.weatherApiKey}&query=${coordinates}&units=f`;

geocode('Chicago', (error, data) => {
  console.log('error', error);
  console.log('data', data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('error', error);
  console.log('data', data);
});
