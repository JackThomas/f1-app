import { Card, ConstructorIndicator, Points } from "@/components/core/misc";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

interface ConstructorCardProps {
    position: string;
    imagePath: string;
    isPrimary?: boolean;
    name: string;
    color: string;
    points: string;
}

const ConstructorCard = ({
    position,
    imagePath,
    isPrimary,
    name,
    color,
    points,
}: ConstructorCardProps) => {
    const textColor = isPrimary ? "white" : "f1.darkgrey";

    return (
        <Card isPrimary={isPrimary}>
            <Text
                fontFamily="heading"
                fontWeight="600"
                textAlign="center"
                width="25px"
                color={textColor}
            >
                {position}
            </Text>
            <ConstructorIndicator color={color} />
            <Box paddingTop={1}>
                <Heading size={isPrimary ? "md" : "xs"} color={textColor}>
                    {name}
                </Heading>
                {/* <Text
                    color={isPrimary ? "white" : "#67676d"}
                    lineHeight={1}
                    paddingTop={1}
                >
                    {constructor.name}
                </Text> */}
            </Box>
            <Box
                marginLeft="auto"
                zIndex={2}
                marginTop={isPrimary ? "auto" : 0}
            >
                <Points value={points} />
            </Box>
            {isPrimary && (
                <Box position="absolute" right={0} bottom={0}>
                    <Flex
                        position="relative"
                        width={150}
                        height={150}
                        zIndex={1}
                        align="center"
                    >
                        <Box
                            position="absolute"
                            left={5}
                            margin="auto"
                            width={200}
                            transform="scaleX(-1)"
                        >
                            <Image
                                src={imagePath}
                                width={200}
                                height={150}
                                alt="tes"
                            />
                        </Box>
                    </Flex>
                    <Box
                        position="absolute"
                        right={0}
                        top={0}
                        width="60%"
                        zIndex={0}
                        height="100%"
                        background-color="#e5e5f7;"
                        background="repeating-linear-gradient( -45deg, #6f6f74, #6f6f74 1px, transparent 1px, transparent 6px )"
                    />
                </Box>
            )}
        </Card>
    );
};

export { ConstructorCard };
