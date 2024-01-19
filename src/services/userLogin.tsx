import api from "./api"

interface ILogin{
    email:string;
    password:string;
}

export async function userLogin({email, password}:ILogin){
    
    const userData = await api()

    if(email !== userData.email || password !== userData.password ) return false

    return true

}