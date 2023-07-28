const request = require('postman-request');
const config = require('../config');

const geocode = (address, callback) => {
  const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${config.mapboxApiKey}&limit=1`;
  request({ url: mapboxUrl, json: true }, (error, response) => {
    if (error) {
      callback('cannot connect to map service', undefined);
    } else if (response.body.features.length === 0) {
      callback('unable to find location of that address', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
