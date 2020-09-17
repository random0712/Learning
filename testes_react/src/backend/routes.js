const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/', UserController.getAll )
routes.get('/users/:id', UserController.getByiD)
routes.post('/users', UserController.save)

module.exports = routes