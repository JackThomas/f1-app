import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    isPrimary?: boolean;
}

const Card = ({ isPrimary, children }: CardProps) => {
    const background = isPrimary ? "#38383F" : "#ffffff";
    return (
        <Box
            background={background}
            borderTopRightRadius="6px"
            borderBottomRightRadius="6px"
            padding="20px"
            position="relative"
            minHeight={isPrimary ? "150px" : "auto"}
        >
            {children}
        </Box>
    );
};

export { Card };
