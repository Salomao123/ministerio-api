const express = require('express')
const routes = express.Router()

const controllers = require('./app/controllers')

const authMiddleware = require('./app/middleware/auth')

routes.post('/usuarios', controllers.UsuarioController.store)
routes.post('/login', controllers.LoginSession.store)

routes.use(authMiddleware)

routes.get('/usuarios/:id', controllers.UsuarioController.index)

/*
Operacoes
*/
routes.get('/operacoes', controllers.OperacaoController.index)
routes.get('/operacoes/:id', controllers.OperacaoController.show)
routes.post('/operacoes', controllers.OperacaoController.store)
// routes.put('/operacoes/:id', controllers.OperacaoController.update)
// routes.delete('/operacoes/:id', controllers.OperacaoController.destroy)

module.exports = routes
