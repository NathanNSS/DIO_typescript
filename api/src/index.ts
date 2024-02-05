import express, {Request, Response, NextFunction} from "express"
import { router } from "./routes"

const app = express()

const port = 5000 

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.use((err:Error, req: Request, res: Response, next: NextFunction)=>{
    return res.status(500).json( {message: err.message ?? "Internal Server Error"})
})

app.listen(port, ()=>console.log('Servidor Rodando 👍'))