const findProductByIdUseCase = require('../useCases/findProductByIdUseCase')

function findProductByIdController (request, response) {
  const { id } = request.params
  const product = findProductByIdUseCase.execute(id)
  return response.json(product)
}

module.exports = { findProductByIdController }