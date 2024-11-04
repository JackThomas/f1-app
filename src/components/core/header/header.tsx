import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Logo } from "../logo";
import { HeaderTitle } from "./header-title";

interface HeaderProps {
    logo?: boolean;
    title?: string;
    children?: ReactNode;
}

const Header = ({ logo, title, children }: HeaderProps) => (
    <Stack background="#e10600" align="center" justify="center" gap={0}>
        <Stack align="center" justify="center" padding={4} height="80px">
            {logo && <Logo fill="white" width="108px" height="27px" />}
            {title && <HeaderTitle color="white">{title}</HeaderTitle>}
        </Stack>
        {children && children}
    </Stack>
);

export { Header };
