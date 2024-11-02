import { Tabs } from "@/components/core/tabs";
import { Constructors, Drivers, RaceResults } from "./components";
import { Box, Flex } from "@chakra-ui/react";

export default function Page() {
    return (
        <>
            <Box width={"100vw"} overflow="hidden">
                <Flex width={"300vw"}>
                    <Box width={"100vw"} height={"90vh"}>
                        <Drivers />
                    </Box>
                    <Box width={"100vw"} height={"90vh"}>
                        <Constructors />
                    </Box>

                    <Box width={"100vw"} height={"90vh"}>
                        <RaceResults />
                    </Box>
                </Flex>
            </Box>
        </>
    );
}
