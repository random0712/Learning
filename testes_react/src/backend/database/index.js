const Sequelize = require('sequelize/types')
const dbConfig = require('../config/database')


const connection = new Sequelize(dbConfig)

module.exports = connection