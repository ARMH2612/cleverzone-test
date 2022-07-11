const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
// const Sequelize = require('sequelize')
require('dotenv').config()


// const sequelize = new Sequelize()

// DB :
// const db = require('./dbConfig')
// db.authenticate()
// .then(()=>console.log("Database connected"))
// .catch(err => console.log("Error: ",err))


// require routes : 
const loginRoutes = require('./routes/login')

const app = express();

app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())
app.use(cors())

// Routes : 
app.use('/', loginRoutes)

app.listen(process.env.PORT,()=>{
    console.log("Listening to port", process.env.PORT);
})