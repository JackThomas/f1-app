import { Header } from "@/components/core/header";
import { Tabs } from "@/components/core/tabs";
import { Viewport } from "@/components/core/viewport";
import { Past, Upcoming } from "./components";

export default function Page() {
    return (
        <>
            <Header title="Racing" />
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
