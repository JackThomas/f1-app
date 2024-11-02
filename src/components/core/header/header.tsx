import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode;
}

const Header = ({ children }: HeaderProps) => (
    <Stack background="#e10600" align="center" padding={4} gap={4}>
        {children}
    </Stack>
);

export { Header };
