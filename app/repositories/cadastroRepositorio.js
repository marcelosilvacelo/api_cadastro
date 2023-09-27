import { consulta } from "../database/conexao.js"

class cadastroRepositorio{
    create(cadastro){
        const sql = 'INSERT INTO cadastro SET?'
        return consulta(sql,cadastro,'NÃO FOI POSSIVEL CAD')
    }
    findAll(){
        const sql = 'SELECT * FROM cadastro'
        return consulta(sql,'NÃO FOI POSSIVEL ENCONTRAR')
    }
    findById(idCadastro){
        const sql = 'SELECT * FROM cadastro WHERE idCadastro =?'
        return consulta(sql,idCadastro,"NÃO FOI POSSIVEL ENCONTRAR")
    }
    update(cadastro, idCadastro){
        const sql = 'UPDATE cadastro SET? WHERE idCadastro =?'
        return consulta(sql,[cadastro, idCadastro],'NÃO FOI POSSIVEL ATUALIZAR')
    }
    delete(idCadastro){
        const sql = 'DELETE FROM cadastro WHERE idCadastro =?'
        return consulta(sql,idCadastro,'NÃO FOI POSSIVEL EXCLUIR')
    }
}
export default new cadastroRepositorio()