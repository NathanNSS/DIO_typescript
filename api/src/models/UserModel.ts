import { UserRepository } from "../repositories/UserRepository";
import { typeORM } from "../database/orm.config"
import { User } from "../entities/UserEntity";

export interface IUser {
    id_user?: string
    name: string
    email: string
    password: string
}

export class UserModel {
    private userRepository: UserRepository

    constructor(userRepository = new UserRepository(typeORM.manager)) {
        this.userRepository = userRepository
    }

    async getUser(idUser: string) {
        return this.userRepository.getUser(idUser)
    }

    async createUser(user: IUser): Promise<User> {
        const newUser = new User(user.name, user.email, user.password)
        return this.userRepository.createUser(newUser)
    }

    async deleteUser(idUser: string) {
        return this.userRepository.deleteUser(idUser)
    }
}