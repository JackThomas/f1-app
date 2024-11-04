import { Box, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ViewportProps {
    children: ReactNode;
}

const Viewport = ({ children }: ViewportProps) => {
    return (
        <Box flexGrow={1} overflow="auto" position="relative">
            <Stack
                position="absolute"
                top={0}
                right={0}
                bottom={0}
                left={0}
                width="100%"
                gap={0}
            >
                {children}
            </Stack>
        </Box>
    );
};

export { Viewport };
