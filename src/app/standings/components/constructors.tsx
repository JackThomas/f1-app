"use client";

import {
    fetchConstructorStandings,
    mapConstructorStandings,
} from "@/helpers/api/constructor-standings";
import { Badge, Box, Flex, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const Constructors = () => {
    const { data } = useQuery({
        queryKey: ["constructor standings 2024"],
        queryFn: fetchConstructorStandings,
    });

    const constructorStandings = useMemo(
        () => mapConstructorStandings(data),
        [data]
    );

    console.log({ constructorStandingsData: data });

    return constructorStandings?.map(
        ({ id, position, name, color, points, isFirst }) => {
            return (
                <Flex key={id}>
                    <Box>{position}</Box>
                    <Box background={color} width="4px" height="20px" />
                    <Box>
                        <Heading>{name}</Heading>
                    </Box>
                    <Box>
                        <Badge>{points}</Badge>
                    </Box>
                </Flex>
            );
        }
    );
};

export { Constructors };
