import { Layout } from "./components/Layout";

import { MainRoutes } from "./routes";
import { getAllLocalStorage, setLocalStorage } from "./services/storage";

export default function App() {

    if(!getAllLocalStorage()) setLocalStorage()

    return (
        <Layout>
            <MainRoutes />
        </Layout>
    )
}
