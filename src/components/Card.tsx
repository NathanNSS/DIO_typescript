import { Box } from "@chakra-ui/layout";

export function Card({children}:{children:React.ReactNode}) {
    return (
        <Box minWidth="40%" display="flex" flexDirection="column" gap="16px" alignSelf="center" backgroundColor="#FFF" borderRadius="25px" padding="24px" margin="auto 0" shadow="md">
            {children}
        </Box>
    )
}