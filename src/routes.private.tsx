import { Outlet } from "react-router-dom"
import { useUserData } from "./context/User"

import AccessDenied from "./components/AccessDenied"

export default function PrivatesRoutes() {
    const { isLoggedIn } = useUserData()
    
    return isLoggedIn ? <Outlet/> : <AccessDenied/>;
}