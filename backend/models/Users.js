// const {Sequelize} = require('sequelize')
const db = require('../dbConfig')

const User = db.define('users',{
    name :{
        type :db.Sequelize.STRING
    },
    email :{
        type :db.Sequelize.STRING
    },
    psw :{
        type :db.Sequelize.STRING
    },
})

module.exports = User