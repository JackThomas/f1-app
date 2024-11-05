"use client";

import { Button, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/standings/drivers");
    };
    return (
        <Stack p={8}>
            <Button visual="primary" onClick={handleClick}>
                Go to Standings
            </Button>
        </Stack>
    );
}
