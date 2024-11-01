import { Stack } from "@chakra-ui/react";
import { TransitionLink } from "../transition-link";

interface HeaderNavigationProps {
    links: {
        id: string;
        label: string;
        href: string;
    }[];
}

const HeaderNavigation = ({ links }: HeaderNavigationProps) => (
    <Stack
        direction="row"
        width="100%"
        bg="#e10600"
        gap={4}
        display="flex"
        justifyContent="space-between"
        background="#e10600"
        align="center"
        padding={4}
    >
        {links.map(({ id, label, href }) => (
            <TransitionLink key={id} href={href}>
                {label}
            </TransitionLink>
        ))}
    </Stack>
);

export { HeaderNavigation };
