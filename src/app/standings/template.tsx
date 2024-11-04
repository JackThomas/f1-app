"use client";

import { Header } from "@/components/core/header";
import { HeaderNavigation } from "@/components/core/header/header-navigation";
import { Viewport } from "@/components/core/viewport";
import { Box, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Template({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <Stack gap={0} flexGrow={1}>
            <Header title="Standings">
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
                <Box flexGrow={1} background="#15151D" pt="25px" pb="25px">
                    {children}
                </Box>
            </Viewport>
        </Stack>
    );
}
