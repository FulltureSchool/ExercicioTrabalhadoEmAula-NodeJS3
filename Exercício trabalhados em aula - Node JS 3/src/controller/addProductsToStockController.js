const addProductsToStockUseCase = require('../useCases/addProductsToStockUseCase')

function addProductsToStockController (request, response) {
  const body = request.body
  const { id } = request.params
  const { quantidade, lote, dataLote, dataValidade } = body

  if (!quantidade || !lote || !dataLote || !dataValidade) {
    return response.status(400).json({ error: 'missing params' })
  }
  const result = addProductsToStockUseCase.execute({ idProduto: id, ...body })
  if (!result.success) {
    return response.status(result.errorCode).json({ error: result.errorMessage })
  }
  return response.status(201).json()
}

module.exports = { addProductsToStockController }
