import React, { createContext, useContext, useEffect, useState } from "react";
import api, { IUserData } from "../services/api";
import { getAllLocalStorage } from "../services/storage";

interface IUser{
    userData: IUserData;
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext({} as IUser)

export function UserData({children}: {children?: React.ReactNode}){
    const [userData, setUserData] = useState<IUserData>()
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const storage = getAllLocalStorage();

    useEffect(()=>{
        api()
          .then(res => setUserData(res))
          .catch(err => console.log(err));

        if(storage){
            const {login} = JSON.parse(storage)
            setIsLoggedIn(login)
        } 
        
    },[])

    if(!userData || typeof userData !== "object") return <></>      

    return(
        <UserContext.Provider value={{userData, isLoggedIn, setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserData = () => useContext(UserContext) as IUser