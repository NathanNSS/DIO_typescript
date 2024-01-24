interface IUser{
    name: string;
    email: string;
}

const db = [
    {
        name: "cleiton campos",
        email:"cleiton@email.com",
    }
] as IUser[]


function awaitFake<T>(response: T): Promise<T>{
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(response)
        }, 1000);
    })
}

export class UserModel{

    async createUser(user:IUser){    
        db.push(user)

        return awaitFake(db)
    }
    
    async getAllUser(){
        return awaitFake(db)
    }
}