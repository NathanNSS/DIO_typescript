export interface IUser{
    name: string;
    email: string;
}

const db = [
    {
        name: "cleiton campos",
        email:"cleiton@email.com",
    }
] as IUser[]


export function awaitFake<T>(response: T): Promise<T>{
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(response)
        }, 1000);
    })
}

export class UserModel{
    db: IUser[]
    
    constructor(dataBase = db){
        this.db = dataBase
    }

    async getAllUser(){
        return awaitFake(db)
    }

    async createUser(user:IUser){    
        this.db.push(user)
        return awaitFake(this.db)
    }
    
    async deleteUser(){
        return awaitFake(this.db.length = 0)
    }
}