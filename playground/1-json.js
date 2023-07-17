const fs = require('fs')

// const book = {
    // title: 'Ego is the Enemy',
    // author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())


const challengeBuffer = fs.readFileSync('1-json.json')
const challengeJson = challengeBuffer.toString()
const user = JSON.parse(challengeJson)
user.name = 'Mark'
user.age = 38
const newData = JSON.stringify(user)
fs.writeFileSync('1-json.json', newData)