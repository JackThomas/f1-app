"use client";

import { DriverName } from "@/components/core/driver";
import {
    fetchDriverStandings,
    mapDriverStandings,
} from "@/helpers/api/driver-standings";
import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useMemo } from "react";

const Drivers = () => {
    const { data } = useQuery({
        queryKey: ["drivers 2024"],
        queryFn: fetchDriverStandings,
    });

    console.log({ data });

    const driverStandings = useMemo(() => mapDriverStandings(data), [data]);

    return driverStandings.map(
        ({
            id,
            position,
            imagePath,
            isFirst,
            givenName,
            familyName,
            isWesternName,
            points,
            constructor,
        }) => {
            return (
                <Flex key={id}>
                    <Box>{position}</Box>
                    <Box
                        background={constructor.color}
                        width="4px"
                        height="20px"
                    />
                    <Box>
                        <DriverName
                            {...{
                                givenName,
                                familyName,
                                isWesternName,
                                isFirst,
                            }}
                        />
                        <Text>{constructor.name}</Text>
                    </Box>
                    <Box>
                        <Badge>{points}</Badge>
                    </Box>

                    {isFirst && (
                        <Image
                            src={imagePath}
                            width={100}
                            height={100}
                            alt="tes"
                        />
                    )}
                </Flex>
            );
        }
    );
};

export { Drivers };
