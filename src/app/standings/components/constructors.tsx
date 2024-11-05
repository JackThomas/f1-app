"use client";

import { ConstructorCard } from "@/components/core/constructor";
import {
    fetchConstructorStandings,
    mapConstructorStandings,
} from "@/helpers/api/constructor-standings";
import { Stack } from "@chakra-ui/react";
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

    return (
        <Stack pr="24px" gap="6px">
            {constructorStandings?.map(({ id, ...rest }) => (
                <ConstructorCard key={id} {...rest} />
            ))}
        </Stack>
    );
};

export { Constructors };
