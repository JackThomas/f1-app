"use client";

import { Box } from "@chakra-ui/react";

import { usePathname } from "next/navigation";
import Test from "../transition-group";
// import Test from "./transition-group-2";

// const Dummy = ({ ...props }: BoxProps) => (
//     <Box width={"100%"} height={"400px"} {...props} />
// );

export default function Page() {
    const pathname = usePathname();

    return (
        <>
            <Test nextPathname={pathname} />
        </>
    );
}
