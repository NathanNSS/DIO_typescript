import { Box, Heading, Flex } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import { useUserData } from "../context/User";

export function Header() {
    const { isLoggedIn, setIsLoggedIn } = useUserData()
    const navigate = useNavigate()

    function logOut(){
        setIsLoggedIn(false)
        navigate("/")
    }

    return (
        <Flex backgroundColor="#FFF" padding="24px 8px" justify="space-between">
            <Box >
                <Heading as="h2" size="xl">🏦 Dio Bank</Heading>

            </Box>
            {
                isLoggedIn && (
                    <Button onClick={logOut}>
                        Sair
                    </Button>
                )
            }

        </Flex>
    )
}