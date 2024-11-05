import { Footer } from "@/components/core/footer";
import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Template({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <Stack gap={0} maxH="-webkit-fill-available" height="100vh">
            {children}
            <Footer />
        </Stack>
    );
}
