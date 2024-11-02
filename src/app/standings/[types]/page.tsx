"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Constructors, Drivers, RaceResults } from "../components";

interface Panel {
    label: string;
    path: string;
    Component: JSX.Element;
}

const panels: Panel[] = [
    {
        label: "Drivers",
        path: "/standings/drivers",
        Component: <Drivers />,
    },
    {
        label: "Constructors",
        path: "/standings/constructors",
        Component: <Constructors />,
    },
    {
        label: "Race Results",
        path: "/standings/race-results",
        Component: <RaceResults />,
    },
];

export default function Page() {
    const pathname = usePathname();
    const initialIndex = 0;
    const [panelIndex, setPanelIndex] = useState(initialIndex);

    useEffect(() => {
        const nextActiveIndex = panels
            .map(({ path }) => path)
            .indexOf(pathname);
        setPanelIndex(nextActiveIndex);
    }, [pathname]);

    return panels[panelIndex]?.Component;
}
