import { Box } from "@chakra-ui/react";

interface ConstructorIndicatorProps {
    color: string;
}

const ConstructorIndicator = ({ color }: ConstructorIndicatorProps) => (
    <Box background={color} width="6px" height="100%" />
);

export { ConstructorIndicator };
