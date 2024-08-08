const { products } = require('../infra/db/dados')

function execute (id) {
  const product = products.find(product => product.id === id)
  return product
}

module.exports = { execute }