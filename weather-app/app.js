const config = require('./config')
const request = require('postman-request')

const url = `http://api.weatherstack.com/current?access_key=${config.apiKey}&query=37.8267,-122.4233&units=f`

request({ url: url, json: true}, (error, response) => {
  console.log(`It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
})
