const database = require('../config/database');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    database.DB,
    database.USER,
    database.PASSWORD,{
        host: database.HOST,
        dialect: database.dialect,

        pool:{
            max: database.pool.max,
            min: database.pool.min,
            acquire: database.pool.acquire,
            idle:database.pool.idle
        }
    }
)

// databse connection testing //

sequelize.authenticate()
.then(() => { console.log('Database connected') })
.catch(err => { console.log('Error' + err) })


// create a empty databse //
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// adding product and review models //

db.products  = require('./productModel.js') (sequelize,DataTypes);
db.reviews = require('./reviewModel.js') (sequelize,DataTypes);

db.sequelize.sync({ force: false }).then(() => {
    console.log('yes re-sync done');
});


module.exports = db;