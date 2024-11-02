"use client";

import { system } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

export function Provider(props: React.PropsWithChildren) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider>{props.children}</ColorModeProvider>
        </ChakraProvider>
    );
}
