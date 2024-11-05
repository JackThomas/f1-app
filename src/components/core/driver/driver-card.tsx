import { DriverName } from "@/components/core/driver";
import { Card, ConstructorIndicator, Points } from "@/components/core/misc";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

interface DriverCardProps {
    position: string;
    imagePath: string;
    isPrimary?: boolean;
    givenName: string;
    familyName: string;
    isWesternName: boolean;
    points: string;
    constructor: {
        color: string;
        name: string;
    };
}

const DriverCard = ({
    position,
    imagePath,
    isPrimary,
    givenName,
    familyName,
    isWesternName,
    points,
    constructor,
}: DriverCardProps) => {
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
            <ConstructorIndicator color={constructor.color} />
            <Box paddingTop={1}>
                <DriverName
                    {...{
                        givenName,
                        familyName,
                        isWesternName,
                        isPrimary,
                        color: textColor,
                    }}
                />
                <Text
                    color={isPrimary ? "white" : "#67676d"}
                    fontSize="sm"
                    lineHeight={1}
                    paddingTop={1}
                >
                    {constructor.name}
                </Text>
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
                    <Box
                        position="relative"
                        width={150}
                        height={150}
                        zIndex={1}
                    >
                        <Image
                            src={imagePath}
                            width={150}
                            height={150}
                            alt="tes"
                        />
                    </Box>
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

export { DriverCard };
