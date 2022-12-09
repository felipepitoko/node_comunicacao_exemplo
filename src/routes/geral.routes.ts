import { Router } from 'express'
import contatosController from '../controllers/contatos.controller'

const roteador = Router()

roteador.get('/',contatosController.consulta)

export default roteador