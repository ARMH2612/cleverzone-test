const express = require('express')
const loginRouter = express.Router()

const {login,signup}  = require('../controllers/loginContoller')

// loginRouter.get('/getUsers', getUsers)
loginRouter.post('/login', login)
loginRouter.post('/signup', signup)

module.exports = loginRouter