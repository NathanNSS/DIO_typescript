import { Box, Button, Center, Input } from "@chakra-ui/react";

export default function App() {
  return (
    <Box minHeight="100vh" backgroundColor="#9413dc" padding="12px">
      <Box backgroundColor="#FFF" borderRadius="25px" padding="12px">
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email"/>
        <Input placeholder="password"/>

        <Center>
          <Button colorScheme="teal" size="sm" width="100%">
            Button
          </Button>
        </Center>
      </Box>
    </Box>
  )
}
