const { Router } = require('express')
const { createProductController } = require('../../controller/createProductController')
const { findProductByIdController } = require('../../controller/findProductByIdController')
const { addProductsToStockController } = require('../../controller/addProductsToStockController')

const routes = Router()

routes.post('/product', createProductController)
routes.get('/product/:id', findProductByIdController)
routes.post('/stock', addProductsToStockController)

module.exports = routes