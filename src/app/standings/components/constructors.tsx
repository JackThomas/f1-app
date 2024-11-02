"use client";

import {
    fetchConstructorStandings,
    mapConstructorStandings,
} from "@/helpers/api/constructor-standings";
import { Badge, Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Card } from "./card";

const Constructors = () => {
    const { data } = useQuery({
        queryKey: ["constructor standings 2024"],
        queryFn: fetchConstructorStandings,
    });

    const constructorStandings = useMemo(
        () => mapConstructorStandings(data),
        [data]
    );

    // console.log({ constructorStandingsData: data });
    return (
        <Stack pr="24px" gap="6px">
            {constructorStandings?.map(
                ({ id, position, name, color, points, isPrimary }) => {
                    return (
                        <Card key={id} isPrimary={isPrimary}>
                            <Flex>
                                <Box>{position}</Box>
                                <Box
                                    background={color}
                                    width="4px"
                                    height="20px"
                                />
                                <Box>
                                    <Heading>{name}</Heading>
                                </Box>
                                <Box>
                                    <Badge visual="points">{points}</Badge>
                                </Box>
                            </Flex>
                        </Card>
                    );
                }
            )}
        </Stack>
    );
};

export { Constructors };
