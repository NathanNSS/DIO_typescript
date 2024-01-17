import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ContaInfo from "./pages/ContaInfo";
import Conta  from "./pages/Conta";
import PrivatesRoutes from "./routes.private";


export function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<PrivatesRoutes/>}>
                <Route path='/conta-info' element={<ContaInfo />} />
                <Route path='/conta/:id' element={<Conta />} />
            </Route>
        </Routes>
    )
}