const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')

routes.get('/', UserController.getAll )
routes.get('/users/:id', UserController.getByiD)
routes.post('/users', UserController.save)
routes.delete('/users/:id', UserController.remove)

routes.post('/users/:owner_id/products', ProductController.save)
routes.get('/products', ProductController.getAll)
routes.get('/users/:owner_id/products', ProductController.getByOwner)
routes.delete('/users/:owner_id/products/:id', ProductController.remove)

module.exports = routes