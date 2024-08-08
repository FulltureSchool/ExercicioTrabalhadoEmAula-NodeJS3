const createProductUseCase = require('../useCases/createProductUseCase')

function createProductController (request, response) {
  const body = request.body
  const { nome, marca, unidadeMedida, quantidade, valorCompra, valorVenda } = body

  if (!nome || !marca || !unidadeMedida || !quantidade || !valorCompra || !valorVenda) {
    return response.status(400).json({ error: 'missing params' })
  }
  createProductUseCase.execute(body)
  return response.status(201).json()
}

module.exports = { createProductController }
