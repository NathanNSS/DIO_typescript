import { Input } from "@chakra-ui/input";
import { Box, Center, Heading } from "@chakra-ui/layout";
import { Button } from "./Button";

import { userLogin } from "../services/userLogin";
import { Header } from "./Header";


export function Card() {
    return (
        <>
            <Box minHeight="100vh" backgroundColor="#9413dc" display="flex" flexDirection="column">
                <Header/>
                <Box minWidth="40%" display="flex" flexDirection="column" gap="16px" alignSelf="center" backgroundColor="#FFF" borderRadius="25px" padding="24px" margin="auto 0">
                    <Center>
                        <Heading as='h4' size="md">
                            Faça o login
                        </Heading>
                    </Center>
                    <Input placeholder="email" />
                    <Input placeholder="password" />

                    <Center>
                        <Button
                            size="md"
                            colorScheme="green"
                            width="95%"
                            //@ts-ignore
                            onClick={(props)=>userLogin(props.target.parentNode.parentNode.childNodes[1].value)}
                        >
                            Entrar
                        </Button>
                    </Center>
                </Box>
            </Box>
        </>
    )
}