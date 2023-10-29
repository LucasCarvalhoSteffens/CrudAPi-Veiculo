import connect from "../config/connection.js";

let veiculo = {}
const con = await connect()

veiculo.all = async function (req, res) {
    try {
        let veiculos = await con.query("SELECT * FROM veiculo;")
        res.send(veiculos)
    } catch (e) {
        console.log("Erro......", e)

    }
}

veiculo.create = async function (req, res) {
    try {
        let veiculo = req.body
        let sql = "INSERT INTO veiculo (placa_veiculo, modelo_veiculo, preco_veiculo) VALUES (?,?,?);"
        let values = [veiculo.placa_veiculo, veiculo.modelo_veiculo, veiculo.preco_veiculo]
        let result = await con.query(sql, values)
        res.send({
            status:"Inserção efetuada com sucesso!",
            result: result
        })
    } catch (e) {
        console.log("Erro:..........", e)

    }
}

veiculo.update = async function (req, res) {
    try {
        let ids = req.params.id
        let veiculo = req.body
        let sql = "UPDATE veiculo SET placa_veiculo=?, modelo_veiculo=?, preco_veiculo=? WHERE id=?;"
        let values = [veiculo.placa_veiculo, veiculo.modelo_veiculo, veiculo.preco_veiculo, ids]
        let result = await con.query(sql, values)
        res.send({
            status:"Atualização do veiculo " + veiculo.placa_veiculo + "efetuada!",
            result: result
        })
    } catch (e) {
        console.log("Erro:..........", e)

    }
}

veiculo.delete = async function (req, res) {
    try {
        let ids = req.params.id
        let sql = "DELETE FROM veiculo WHERE id=?;"
        let result = await con.query(sql, [ids])
        res.send({
            status:"Exclusão do veiculo " + ids + " foi efetuada!",
            result: result
        })
    } catch (e) {
        console.log("Erro:..........", e)

    }
}
export {veiculo}

