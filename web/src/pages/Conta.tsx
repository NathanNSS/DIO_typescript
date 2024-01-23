import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";

import { CardInfo } from "../components/CardInfo";
import api, { IUserData } from "../services/api";
import { useUserData } from "../context/User";

export default function Conta() {
    const [userData, setUserdata] = useState<IUserData>()

    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn } = useUserData()

    useEffect(() => {
        api()
            .then(res => setUserdata(res))
            .catch(err => console.log(err));
    }, [])



    if (!userData || typeof userData !== "object") return (
        <Center>
            <Spinner style={{ margin: "40vh 0" }} color="white" size="xl" />
        </Center>
    )

    if (userData.id !== id || !isLoggedIn) navigate('/')

    const name = capitalizeName(userData.name)
    const dateTime = new Date().toLocaleString().replace(",", "")
    const balance = userData.balance.toLocaleString("pt-BR", { style: 'currency', currency: "BRL" })

    return (
        <Center flexDirection="column" gap="16px">
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                <CardInfo mainContent={`Bem vindo ${name}`} content={dateTime} />
                <CardInfo mainContent={`Saldo`} content={balance} />
            </SimpleGrid>
            <Link style={{color:"red"}} to="/conta-info">Informações da Conta {'>>'}</Link>
        </Center>
    )
}

export function capitalizeName(name: string) {
    let array_name = name.split(" ")
    let newName = array_name.map(item =>
        item.charAt(0).toLocaleUpperCase() + item.slice(1)
    ).join(" ")

    return newName
}