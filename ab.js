const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000
const db_url="mongodb+srv://heni:heni123@cluster0.dulw2ge.mongodb.net/?retryWrites=true&w=majority";

async function connectToMongo(){
  try {
     await mongoose.connect(db_url)
     console.log("database connected successfully :)" );
  } catch (error) {
    console.log("not connected!! :(")  
  }
}
connectToMongo();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Hello portdhsdhfgd `)
})