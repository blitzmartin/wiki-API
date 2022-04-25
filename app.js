// Require modules
const express = require('express')
const ejs = require ('ejs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { urlencoded } = require('express')

// Create express server
const app = express()

// set Public folder, views folder and scan body
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Connect to MongoDB server
dotenv.config();
mongoose.connect(process.env.DB_SERVER)
.then(()=> console.log('Connected to DB Server...'))
.catch((err)=> console.log(err))


// SERVER RUNNING
const port = process.env.PORT || 3000;
const hostname = 'localhost';

app.listen(port, hostname, (err) => {
    if (err) {
        return console.log('Something went wrong: ' + err);
    } else {
        console.log(`Server running on port ${port}...`)
    }
})

// require Routes
const articlesRouter = require('./routes/articlesRoutes')

// use Routes
app.use('/articles', articlesRouter);