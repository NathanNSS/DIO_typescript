import { useState } from "react";
import { Box, Center, Heading, Input } from "@chakra-ui/react";

import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { userLogin } from "../services/userLogin";
import { useUserData } from "../context/User";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const [email, setEmail] = useState("")

    const {setIsLoggedIn} = useUserData()
    const navigate = useNavigate()
    

    async function validateUser(email: string){
        try {
            const res = await userLogin(email)

            if (!res) return  alert("Usuário invalido!")
            
            setIsLoggedIn(true)
            navigate("/conta/000")
            
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <Box minHeight="100vh" display="flex" flexDirection="column">
            <Card>
                <Center>
                    <Heading as='h4' size="md">
                        Faça o login
                    </Heading>
                </Center>
                <Input placeholder="email" onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" />

                <Center>
                    <Button
                        size="md"
                        colorScheme="green"
                        width="95%"
                        onClick={() => validateUser(email)}
                    >
                        Entrar
                    </Button>
                </Center>
            </Card>
        </Box>
    )
}
