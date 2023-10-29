import express from "express"
import {router} from "./routes/veiculo_routes.js"

let server = express()

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use("/", router)

server.listen(4000, function () {
    console.log('porta 4000')
})
