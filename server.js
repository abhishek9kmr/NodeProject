const express = require('express')
const app = express()
const db = require('./db')

app.get('/', function (req, res) {
  res.send('Welcome to the restraunt')
})
app.get('/chicken', function (req, res) {
    res.send('Would you like to have chicken ?')
  })

app.listen(3000, ()=>{
  console.log("Listening on port 3000")
})