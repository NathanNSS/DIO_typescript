import api from "./api"

export async function userLogin(email : string){
    
    const userData = await api()

    if(email !== userData.email) return false

    return true

}