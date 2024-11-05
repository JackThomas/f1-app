import { Header } from "@/components/core/header";
import { Viewport } from "@/components/core/viewport";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Template({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <Header title="Racing" />
            <Viewport>
                <Box flexGrow={1} background="f1.darkgrey" pt="25px" pb="25px">
                    {children}
                </Box>
            </Viewport>
        </>
    );
}
