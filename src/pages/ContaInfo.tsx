import { Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ContaInfo() {
    return (
        <Center>
            <Text>Informações da Conta: <Link style={{color:"red"}} to="/conta/000">Conta</Link></Text>
        </Center>
    )
}
