"use client";

import { Provider as ChakraProvider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface ProviderProps {
    children: ReactNode;
}

const queryClient = new QueryClient();

const Provider = ({ children }: ProviderProps) => (
    <QueryClientProvider client={queryClient}>
        <ChakraProvider>{children}</ChakraProvider>
    </QueryClientProvider>
);

export { Provider };
