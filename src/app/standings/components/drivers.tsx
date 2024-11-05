"use client";

import {
    fetchDriverStandings,
    mapDriverStandings,
} from "@/helpers/api/driver-standings";
import { Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { DriverCard } from "@/components/core/driver";

const Drivers = () => {
    const { data } = useQuery({
        queryKey: ["drivers 2024"],
        queryFn: fetchDriverStandings,
    });

    const driverStandings = useMemo(() => mapDriverStandings(data), [data]);

    return (
        <Stack pr="24px" gap="6px">
            {driverStandings.map(({ id, ...rest }) => (
                <DriverCard key={id} {...rest} />
            ))}
        </Stack>
    );
};

export { Drivers };
