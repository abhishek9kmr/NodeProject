const mongoose = require("mongoose")

//Define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' //hotels is the name of database

//Setup mongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

//Define event listner for database connection

db.on('connected', ()=>{
    console.log('Connected to MongoDB server')
})

db.on('error', (err)=>{
    console.log('MongoDB server error', err)
})

db.on('disconnected', ()=>{
    console.log(' MongoDB disconnected')
})

//Export the database connection
module.exports = db