import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    isPrimary?: boolean;
}

const Card = ({ isPrimary, children }: CardProps) => {
    const background = isPrimary ? "#38383F" : "white";
    return (
        <Stack
            background={background}
            borderTopRightRadius="6px"
            borderBottomRightRadius="6px"
            padding="20px"
            paddingRight="40px"
            position="relative"
            direction="row"
            gap={0}
            overflow="hidden"
            minHeight={isPrimary ? "150px" : "90px"}
        >
            <Stack flexGrow={1} direction="row" align="center" gap="20px">
                {children}
            </Stack>
        </Stack>
    );
};

export { Card };
