const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const Person= require("./models/Person")
const MenuItem= require("./models/MenuItem")

app.get('/', function (req, res) {
  res.send('Welcome to the restraunt')
})

//Post route to add a person
app.post('/person', async(req, res)=>{
  try{

  const data = req.body //Assuming the request body contains the person data

  //Create a person model using the Mongoose model
  const newPerson = new Person(data);

  //Save the new person to database
 const response= await newPerson.save();
 console.log('data saved');
 res.status(200).json(response);
  
}catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal server error'})
}
})

//Get method to get the person

app.get('/person', async(req, res)=>{
  try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
})

//Post route to add a menu
app.post('/menu', async(req, res)=>{
  try{

  const data = req.body //Assuming the request body contains the menu item data

  //Create a menu item model using the Mongoose model
  const newMenuItem = new MenuItem(data);

  //Save the new menu item to database
 const response= await newMenuItem.save();
 console.log('data saved');
 res.status(200).json(response);
  
}catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal server error'})
}
})

//Get method to get the menu

app.get('/menu', async(req, res)=>{
  try{
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'})
  }
})

app.listen(3000, ()=>{
  console.log("Listening on port 3000")
})