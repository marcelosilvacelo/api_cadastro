import { Router } from "express";
import cadastroController from "./app/controller/cadastroController.js";

const router = Router()
router.post('/cadastro',cadastroController.store)
router.get('/cadastro',cadastroController.index)
router.get('/cadastro/:idCadastro',cadastroController.show)
router.put('/cadastro/:idCadastro',cadastroController.put)
router.delete('/cadastro/:idCadastro',cadastroController.delete)

export default router