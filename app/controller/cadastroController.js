import cadastroRepositorio from "../repositories/cadastroRepositorio.js"

class cadastroController{
    async store(req, res){
        const cadastro = req.body
        const row = await cadastroRepositorio.create(cadastro)
        res.json(row)
    }
    async index(req, res){
        const row = await cadastroRepositorio.findAll()
        res.json(row)
    }
    async show (req, res){
        const idCadastro = req.params.idCadastro
        const row = await cadastroRepositorio.findById(idCadastro)
        res.json(row)
    }
    async put (req, res){
        const idCadastro = req.params.idCadastro
        const cadastro =req.body
        const row = await cadastroRepositorio.update(cadastro,idCadastro)
        res.json(row)
    }
    async delete (req, res){
        const idCadastro = req.params.idCadastro
        const row = await cadastroRepositorio.delete(idCadastro)
        res.json(row)
    }
}
export default new cadastroController()