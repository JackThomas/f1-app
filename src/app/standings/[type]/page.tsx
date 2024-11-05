"use client";

import { usePathname } from "next/navigation";
import Test from "../transition-group";

const getCurrentPath = (pathname: string) => {
    const path = pathname.split("/").filter(Boolean);
    return path[path.length - 1];
};

export default function Page() {
    const pathname = usePathname();
    const view = getCurrentPath(pathname);

    return <Test view={view} />;
}
