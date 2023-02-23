import mysql from 'mysql'

const conexao = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'cadastros'
})
conexao.connect()
export const consulta = (sql, valores="",mensagemReject)=>{
    return new Promise((resolve, reject)=>{
        conexao.query(sql,valores,(error,resultado)=>{
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}
export default conexao