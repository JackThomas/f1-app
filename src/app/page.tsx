import { Header } from "@/components/core/header";
import { Viewport } from "@/components/core/viewport";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default async function Page() {
    return (
        <>
            <Header logo />
            <Viewport>
                <Box flexGrow={1} background="f1.darkgrey" pt="25px" pb="25px">
                    <Stack p={8} gap="50px">
                        <Box>
                            <Heading
                                color="white"
                                fontWeight="400"
                                textAlign="center"
                                paddingBottom={4}
                            >
                                Dummy app - in progress
                            </Heading>
                            <Text color="white" textAlign="center">
                                Built using{" "}
                                <Link
                                    color="inherit"
                                    href="https://nextjs.org/"
                                    target="_blank"
                                >
                                    Next.js
                                </Link>
                                ,{" "}
                                <Link
                                    color="inherit"
                                    href="https://www.chakra-ui.com/"
                                    target="_blank"
                                >
                                    Chakra UI
                                </Link>{" "}
                                and the{" "}
                                <Link
                                    color="inherit"
                                    href="https://api.jolpi.ca/ergast/"
                                    target="_blank"
                                >
                                    Ergast F1 API
                                </Link>
                            </Text>
                        </Box>
                        <Button visual="primary" as={Link} href="/standings">
                            Go to Standings
                        </Button>
                    </Stack>
                </Box>
            </Viewport>
        </>
    );
}
