import { UserRepository } from "../repositories/UserRepository";
import { typeORM } from "../database/orm.config"
import { User } from "../entities/UserEntity";
import jwt from "jsonwebtoken"

export interface IUser {
    id_user?: string
    name: string
    email: string
    password: string
}

let uu: User

export class UserModel {
    private userRepository: UserRepository

    constructor(userRepository = new UserRepository(typeORM.manager)) {
        this.userRepository = userRepository
    }

    async getUser(idUser: string): Promise<User | null> {
        return this.userRepository.getUser(idUser)
    }

    async getAuthenticatedUser(email: string, password: string): Promise<User | null> {

        return this.userRepository.getUserByNameThePassword(email, password)
    }

    async getToken(email: string, password: string) {

        if (!email || !password) throw new Error("Informações obrigatórias não fornecidas!");

        const user = await this.getAuthenticatedUser(email, password)

        if (!user) throw new Error("Usuário ou Senha Invalida");

        const token = jwt.sign({ name: user.name, email: user.email }, process.env.SECRET_KEY_JWT ?? "recebiumnulo", { subject: user.id_user })

        return token
    }

    async createUser(user: IUser): Promise<User> {
        const newUser = new User(user.name, user.email, user.password)
        return this.userRepository.createUser(newUser)
    }

    async deleteUser(idUser: string) {
        return this.userRepository.deleteUser(idUser)
    }
}