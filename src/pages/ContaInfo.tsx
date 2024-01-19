import { Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useUserData } from "../context/User";
import { capitalizeName } from "./Conta";

export default function ContaInfo() {
    const {userData} = useUserData()
    return (
        <Center flexDirection="column">
            <fieldset>
                <legend>Informações da Conta:</legend>
                <Text>Nome: <span>{capitalizeName(userData?.name ?? "?")}</span></Text>
                <Text>E-mail: <span>{userData?.email ?? "?"}</span></Text>

            </fieldset>

            <br />
            
            <Link style={{color:"red"}} to="/conta/000">Conta</Link>
        </Center>
    )
}
