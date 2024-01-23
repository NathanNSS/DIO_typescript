import { Button as BTN, ButtonProps as IButtonProps } from "@chakra-ui/button"

interface ButtonProps extends IButtonProps {
    children: React.ReactNode
    size: 'xs' | 'sm' | 'md' | 'lg'
}

export function Button({ children, size, ...rest }: ButtonProps) {
    return (
        <BTN size={size} {...rest}>
            {children}
        </BTN>
    )
}