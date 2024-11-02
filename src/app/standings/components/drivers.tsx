"use client";

import { DriverName } from "@/components/core/driver";
import {
    fetchDriverStandings,
    mapDriverStandings,
} from "@/helpers/api/driver-standings";
import { Badge, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useMemo } from "react";
import { Card } from "./card";

const Drivers = () => {
    const { data } = useQuery({
        queryKey: ["drivers 2024"],
        queryFn: fetchDriverStandings,
    });

    // console.log({ data });

    const driverStandings = useMemo(() => mapDriverStandings(data), [data]);

    return (
        <Stack pr="24px" gap="6px">
            {driverStandings.map(
                ({
                    id,
                    position,
                    imagePath,
                    isPrimary,
                    givenName,
                    familyName,
                    isWesternName,
                    points,
                    constructor,
                }) => {
                    return (
                        <Card key={id} isPrimary={isPrimary}>
                            <Flex align="center">
                                <Box>{position}</Box>
                                <Box
                                    background={constructor.color}
                                    width="6px"
                                    height="60px"
                                />
                                <Box>
                                    <DriverName
                                        {...{
                                            givenName,
                                            familyName,
                                            isWesternName,
                                            isPrimary,
                                        }}
                                    />
                                    <Text>{constructor.name}</Text>
                                </Box>
                                <Box>
                                    <Badge visual="points">{points}PTS</Badge>
                                </Box>

                                {isPrimary && (
                                    <Box
                                        position="absolute"
                                        right={0}
                                        bottom={0}
                                    >
                                        <Image
                                            src={imagePath}
                                            width={100}
                                            height={100}
                                            alt="tes"
                                        />
                                    </Box>
                                )}
                            </Flex>
                        </Card>
                    );
                }
            )}
        </Stack>
    );
};

export { Drivers };
