import { DeleteResult, EntityManager } from "typeorm";
import { User } from "../entities/UserEntity";

export class UserRepository{
    constructor(manager: EntityManager){
        this.manager = manager
    }   

    private manager: EntityManager
    
    async createUser(user: User): Promise<User>{
        return this.manager.save(User, user)
    }
    
    async getUser(idUser: string): Promise<User | null>{
        return this.manager.findOne(User, {
            where:{
                id_user: idUser
            }
        })
    }
    
    async deleteUser(idUser: string): Promise<object>{
        return this.manager.delete(User, {'id_user': idUser})
    }
}