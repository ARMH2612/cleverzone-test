const { Sequelize } = require('sequelize');
// const Pool = require('pg').Pool
require('dotenv').config()

// const pool = new Pool({
//     // user : process.env.USER,
//     // host : process.env.HOST,
//     // database : process.env.DATABASE,
//     // password : process.env.PASSWORD,
//     port : process.env.PORTPG,
// })

module.exports = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
  });
