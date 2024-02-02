import { Request, Response } from "express"
import { UserModel } from "../models/UserModel"

export class UserController {
    userModel: UserModel;

    constructor(userModel = new UserModel()) {
        this.userModel = userModel;
        this.getUser = this.getUser.bind(this) //Necessário para não perder o contexto de this. Utilizando "arrow fn" não perderia o contexto!
        this.createUser = this.createUser.bind(this) 
        this.deleteUser = this.deleteUser.bind(this) 
    }
    
    async getUser(req: Request, res: Response): Promise<Response> {
        const reqClient = req.params

        if(!reqClient.id) return res.status(400).json({message: "Bad Request, user id not provided"})

        const dataUser = await this.userModel.getUser(reqClient.id)
        return res.status(200).json(dataUser)
    }

    async createUser(req: Request, res: Response): Promise<Response> {
        const dataBody = req.body

        if (!dataBody.name || !dataBody.email  || !dataBody.password) return res.status(400).json({message: "Bad Request, name or email not provided"})


        await this.userModel.createUser(dataBody)

        return res.status(201).json({ message: "Usuário Criado com Sucesso" })
    }

    async deleteUser(req: Request, res: Response): Promise<Response>{
        const reqClient = req.params

        if(!reqClient.id) return res.status(400).json({message: "Bad Request, user id not provided"})

        
        await this.userModel.deleteUser(reqClient.id)
        return res.status(200).json({ message: "Usuários deletados com Sucesso" })
    }
}