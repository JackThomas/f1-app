import { Header } from "@/components/core/header";
import { HeaderNavigation } from "@/components/core/header/header-navigation";
import { Logo } from "@/components/core/logo";
import { Viewport } from "@/components/core/viewport";
import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Transition from "./components/transition";

export default function Template({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <Stack gap={0} height="90vh">
            <Header>
                <Logo fill="#ffffff" width="108px" height="27px" />
                <HeaderNavigation
                    links={[
                        {
                            id: "1",
                            label: "Drivers",
                            href: "/standings/drivers",
                        },
                        {
                            id: "2",
                            label: "Constructors",
                            href: "/standings/constructors",
                        },
                        {
                            id: "3",
                            label: "Race Results",
                            href: "/standings/race-results",
                        },
                    ]}
                />
            </Header>
            <Viewport>
                <Transition>{children}</Transition>
            </Viewport>
        </Stack>
    );
}
