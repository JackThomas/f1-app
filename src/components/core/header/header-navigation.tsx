"use client";

import { Box, Button, Stack } from "@chakra-ui/react";

interface HeaderNavigationProps {
    links: {
        id: string;
        label: string;
        href: string;
    }[];
}

const HeaderNavigation = ({ links }: HeaderNavigationProps) => {
    const handleClick = (href: string) => {
        window.history.pushState(null, "", href);
    };

    return (
        <Stack
            direction="row"
            width="100%"
            bg="#e10600"
            gap={4}
            display="flex"
            justifyContent="space-between"
            background="#e10600"
            align="center"
        >
            {links.map(({ id, label, href }) => (
                <Box key={id} flexGrow={1} flexBasis={`${100 / links.length}%`}>
                    <Button width="100%" onClick={() => handleClick(href)}>
                        {label}
                    </Button>
                </Box>
            ))}
        </Stack>
    );
};

export { HeaderNavigation };
