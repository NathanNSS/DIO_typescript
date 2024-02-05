import {NextFunction, Request, Response} from "express"
import { UserModel } from "../models/UserModel"


export class AuthController{
    userModel:UserModel

    constructor(userModel = new UserModel()){
        this.userModel = userModel
        this.login = this.login.bind(this)
    }
    
    async login(req: Request, res: Response, next: NextFunction){
        try {
            const {email , password} = req.body
            
            const token = await this.userModel.getToken(email, password)
            
            return res.status(200).json({token: token})
        } catch (error) {
            next(error)
        }

    }
}