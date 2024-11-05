import { Badge, Box } from "@chakra-ui/react";

interface PointsProps {
    value: string;
}

const Points = ({ value }: PointsProps) => (
    <Badge visual="points">
        <Box as="span" fontWeight="600">
            {value}
        </Box>{" "}
        <Box as="span">PTS</Box>
    </Badge>
);

export { Points };
