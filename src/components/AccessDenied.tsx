import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AccessDenied() {
    const navigate = useNavigate()
    

    useEffect(()=>{

        let timeId = window.setTimeout(() => {
            //timeId = null
            navigate("/")
        }, 3000)

        return () => clearTimeout(timeId)
    },[])

    return (
        <Box minHeight="100vh" display="flex" flexDirection="column">
            <Heading as="h1" color="white" alignSelf="center" >Acesso Negado, voce sera redirecionado para tela inicial !</Heading>
        </Box>

    )
}