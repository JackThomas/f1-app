import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ViewportProps {
    children: ReactNode;
}

const Viewport = ({ children }: ViewportProps) => {
    return (
        <Box flexGrow={1} overflow="auto">
            {children}
        </Box>
    );
};

export { Viewport };
