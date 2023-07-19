const config = require('./config')
const request = require('postman-request')

const location = 'Chicago'
const weatherUrl = `http://api.weatherstack.com/current?access_key=${config.apiKey}&query=37.8267,-122.4233&units=f`
const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${config.mapboxApiKey}`

// request({ url: weatherUrl, json: true}, (error, response) => {
//   console.log(`It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
// })

request({url: mapboxUrl, json: true}, (error, response) => {
  console.log(response)
})