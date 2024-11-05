import { Button } from "@/components/ui/button";
import { Stack } from "@chakra-ui/react";

const RaceResults = () => {
    const handleClick = () => {
        const href = "/standings/drivers";
        history.pushState({}, "", href);
    };

    return (
        <Stack p={8}>
            <Button visual="primary" onClick={handleClick}>
                Go back to drivers
            </Button>
        </Stack>
    );
};

export { RaceResults };
