'use strict'

const Persona = use('Persona')

class PasswordRequestController {
  async store ({ request, response }) {
    await Persona.forgotPassword(request.input('uid'))

    return response.noContent()
  }

  async update ({ params, request, response }) {
    const token = params.token
    const payload = request.only(['password', 'password_confirmation'])

    await Persona.updatePasswordByToken(token, payload)

    return response.noContent()
  }
}

module.exports = PasswordRequestController
