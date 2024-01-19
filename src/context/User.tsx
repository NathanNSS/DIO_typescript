import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserData } from "../services/api";
import { ILocalStorage, getAllLocalStorage } from "../services/storage";

interface IUser{
    userData?: IUserData;
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext({} as IUser)

export function UserData({children}: {children?: React.ReactNode}){
    const [userData, setUserData] = useState<IUserData>()
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const storage = getAllLocalStorage();

    useEffect(()=>{
        
        if(storage){
            const {login, userData} = JSON.parse(storage) as ILocalStorage
            setIsLoggedIn(login)

            if(login) setUserData(userData)
        } 
        
    },[])        

    return(
        <UserContext.Provider value={{userData, isLoggedIn, setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserData = () => useContext(UserContext) as IUser