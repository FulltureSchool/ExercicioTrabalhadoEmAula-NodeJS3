const { products } = require('../infra/db/dados')

function execute (body) {
  products.push({ id: ++products.length, ...body })
}

module.exports = { execute }