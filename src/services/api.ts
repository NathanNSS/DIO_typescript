const userData = {
    id:"000",
    email:"nathan@email.com",
    password:"coxinha123",
    name:"nathan soares",
    balance:2000
}

export type IUserData =  typeof userData

export default async function api(){
    return new Promise<IUserData>((resolve) => {
        setTimeout(() => {
            resolve(userData)
        }, 1000);
    })
}