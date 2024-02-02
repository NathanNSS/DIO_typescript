import { User } from "../entities/UserEntity";
import { IUser, UserModel} from "../models/UserModel";

export function awaitFake<T>(response: T): Promise<T>{
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(response)
        }, 1000);
    })
}

export class MockUserModel extends UserModel{
    db: User[] = [];
    //@ts-ignore || Testar futuramente este método de fazer
    constructor() { }

    createUser(user: IUser): Promise<User> {

        this.db.push(new User(user.name, user.email, user.password))
        return awaitFake(this.db.at(-1)!!)
    }

    getUser(idUser: string): Promise<User> {
        const response = this.db.filter(user => user.id_user === idUser)
        return awaitFake(response[0])
    }

    deleteUser(idUser: string){
        const response = this.db.filter(user => user.id_user !== idUser)
        this.db = response
        return awaitFake({message:"Deletado!"})
    }
}