import express from "express"
import {veiculo} from "../controller/veiculo_controller.js"

let router = express.Router()
router.get('/veiculo', veiculo.all)
router.post('/veiculo', veiculo.create)
router.put('/veiculo/:id', veiculo.update)
router.delete('/veiculo/:id', veiculo.delete)

export {router}