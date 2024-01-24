import {Request, Response} from "express"
import { UserModel } from "../models/UserModel"

export class UserController {

    async getAllUser(req: Request, res: Response){
        const userModel = new UserModel()
        const dataUser = await userModel.getAllUser()
        
        return res.status(200).send(dataUser) 
    }

    async createUser(req: Request, res: Response){
        const dataBody = req.body        
        
        if(!dataBody.name || !dataBody.email) return res.status(400).send("Bad Request, name or email not provided")

        const userModel = new UserModel()

        await userModel.createUser(dataBody)

        return  res.status(201).send({message:"Usuário Criado com Sucesso"})
    }
}