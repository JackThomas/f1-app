import { Header } from "@/components/core/header";
import { Logo } from "@/components/core/logo";
import { Tabs } from "@/components/core/tabs";
import { Viewport } from "@/components/core/viewport";
import { Past, Upcoming } from "./components";

export default function Page() {
    return (
        <>
            <Header>
                <Logo fill="#ffffff" width="108px" height="27px" />
            </Header>
            <Viewport>
                <Tabs
                    tabs={[
                        {
                            id: "1",
                            label: "Upcoming",
                            component: <Upcoming />,
                        },
                        {
                            id: "2",
                            label: "Past",
                            component: <Past />,
                        },
                    ]}
                />
            </Viewport>
        </>
    );
}
