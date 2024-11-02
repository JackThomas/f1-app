"use client";

import { Header } from "@/components/core/header";
import { HeaderNavigation } from "@/components/core/header/header-navigation";
import { Logo } from "@/components/core/logo";
import { Viewport } from "@/components/core/viewport";
import { Box, Stack } from "@chakra-ui/react";
import { ReactNode, useRef } from "react";

export default function Template({
    children,
}: Readonly<{ children: ReactNode }>) {
    const wrapperRef = useRef(null);

    return (
        <Stack gap={0} height="90vh">
            <Header>
                <Logo fill="#ffffff" width="108px" height="27px" />
                <HeaderNavigation
                    links={[
                        {
                            id: "1",
                            label: "Drivers",
                            href: "/standings/drivers",
                        },
                        {
                            id: "2",
                            label: "Constructors",
                            href: "/standings/constructors",
                        },
                        {
                            id: "3",
                            label: "Race Results",
                            href: "/standings/race-results",
                        },
                    ]}
                />
            </Header>
            <Viewport>
                <Box background="#15151D" pt="25px" pb="25px" ref={wrapperRef}>
                    {children}
                </Box>
            </Viewport>
        </Stack>
    );
}
