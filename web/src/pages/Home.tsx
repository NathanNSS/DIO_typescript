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

    async function validateUser() {
        try {
            const res = await userLogin({ email:email.trim(), password:password.trim() })

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
                <form style={{display:"flex", flexDirection:"column", gap:"16px"}} onSubmit={(event)=>{ event.preventDefault(); validateUser()}}>                
                    <Center>
                        <Heading as='h4' size="md">
                            Faça o login
                        </Heading>
                    </Center>
                    <Input placeholder="email" onChange={(event) => setEmail(event.target.value)}/>
                    <Input placeholder="password" type="password" onChange={(event) => setPassword(event.target.value)} />

                    <Center>
                        <Button
                            type="submit"
                            size="md"
                            colorScheme="green"
                            width="95%"
                        >
                            Entrar
                        </Button>
                    </Center>
                </form>
            </Card>
            <Box style={{position:"absolute", top:0, right:0}}>
                <p>usuario: <b>nathan@email.com</b></p>
                <p>senha: <b>coxinha123</b></p>
            </Box>
        </Box>
    )
}
