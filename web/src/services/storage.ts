import { IUserData } from "./api";

export interface ILocalStorage{
    login: boolean;
    userData?: IUserData
}

export const obj_localStorage = {
    login:false
} 

export function getAllLocalStorage(){
    return localStorage.getItem("@diobank")
}

export function setLocalStorage(){
    localStorage.setItem("@diobank", JSON.stringify(obj_localStorage))
}

export function changeLocalStorage(obj: ILocalStorage){
    localStorage.setItem("@diobank", JSON.stringify(obj))
}