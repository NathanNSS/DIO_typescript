import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function verifyAuth(req: Request, res: Response, next: NextFunction){
    const auth = req.headers.authorization

    if(!auth) throw new Error("unauthorized request")

    const[_, bearer] = auth.split(" ")

    try {
        const {sub} = jwt.verify(bearer, process.env.SECRET_KEY_JWT ?? "recebiumnulo")
        return next()
    } catch (error) {
        console.error(error)
        next(error)
    }
}