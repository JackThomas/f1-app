import { Tabs } from "@/components/core/tabs";
import { Constructors, Drivers, RaceResults } from "./components";

export default function Page() {
    return (
        <Tabs
            tabs={[
                {
                    id: "1",
                    label: "Drivers",
                    component: <Drivers />,
                },
                {
                    id: "2",
                    label: "Constructors",
                    component: <Constructors />,
                },
                {
                    id: "3",
                    label: "Race Results",
                    component: <RaceResults />,
                },
            ]}
        />
    );
}
