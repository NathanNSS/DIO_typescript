import { useEffect, useState } from "react";
import { Box, Center, Heading, Input } from "@chakra-ui/react";

import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { userLogin } from "../services/userLogin";
import { useUserData } from "../context/User";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage, getAllLocalStorage } from "../services/storage";
import api from "../services/api";


export default function Home() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { setIsLoggedIn } = useUserData()
    const navigate = useNavigate()

    async function validateUser(email: string) {
        try {
            const res = await userLogin({ email, password })

            if (!res) return alert("Usuário invalido!")

            let userData
            await api()
                .then(res => userData = res)
                .catch(err => console.log(err));

            setIsLoggedIn(true)
            changeLocalStorage({ login: true, userData })
            navigate("/conta/000")

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        const storage = getAllLocalStorage()
        
        if(storage){
            const {userData} = JSON.parse(storage)

            if(Object.keys(userData ?? {}).length > 0) navigate("/conta/000")
        } 

    }, [])

    return (
        <Box minHeight="100vh" display="flex" flexDirection="column">
            <Card>
                <Center>
                    <Heading as='h4' size="md">
                        Faça o login
                    </Heading>
                </Center>
                <Input placeholder="email" onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)} />

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
