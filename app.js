const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

//bringing routes

const postRoutes = require('./routes/post')

//database comes here

mongoose.connect(
    process.env.MONGO_URI
    ).then(()=> console.log('db connected'))

mongoose.connection.on('err', err => console.log(`Error: ${err.message}`))
//middleware inform

const myOwnMiddleWare = (req, res, next) => {
    console.log('middleware applied!!!');
    next();
}

//middleware
app.use(expressValidator())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(myOwnMiddleWare)

//basic routes

app.use('/', postRoutes)

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('App is running at http://localhost:8080')
})
