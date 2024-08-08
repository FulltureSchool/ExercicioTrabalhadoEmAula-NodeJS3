const { stock, products } = require('../infra/db/dados')

function execute (data) {
  const product = products.find(product => product.id === data.idProduto)
  if (!product) {
    return {
      success: false,
      errorMessage: 'Product not found',
      errorCode: 400
    }
  }
  const newStock = {
    id: ++stock.length,
    ...data,
    dataLote: new Date(data.dataLote),
    dataValidade: new Date(data.dataValidade),
    dataCriacao: new Date(),
    dataAtualizacao: new Date()
  }
  stock.push(newStock)
  return { success: true }
}

module.exports = { execute }