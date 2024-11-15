"use client";

import { getDimensions } from "@/helpers/element";
import { Box, Button, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface HeaderNavigationProps {
    links: {
        id: string;
        label: string;
        href: string;
    }[];
}

const HeaderNavigation = ({ links }: HeaderNavigationProps) => {
    const pathname = usePathname();
    const [initialIndicatorProps, setInitialIndicatorProps] = useState({});
    const [indicatorProps, setIndicatorProps] = useState({});
    const buttonsRef = useRef<Record<string, HTMLButtonElement>>({});
    const hasInitIndicatorRef = useRef(false);

    const handleClick = (href: string) => {
        const hrefExists = links.some((link) => link.href === href);
        if (!hrefExists) {
            return;
        }
        setActiveElement(href);
        setPath(href);
    };

    const setActiveElement = (href: string) => {
        const activeButton = buttonsRef.current[href];

        const { left, width } = getDimensions(activeButton);

        setIndicatorProps({
            left: `${left}px`,
            width: `${width}px`,
        });
    };

    const setPath = (href: string) => {
        history.pushState({}, "", href);
    };

    useEffect(() => {
        if (hasInitIndicatorRef.current) {
            setActiveElement(pathname);
        }
    }, [pathname]);

    useEffect(() => {
        const hrefExists = links.some((link) => link.href === pathname);
        if (!hrefExists) {
            return;
        }

        if (!hasInitIndicatorRef.current) {
            hasInitIndicatorRef.current = true;
            const activeButton = buttonsRef.current[pathname];
            const { left, width } = getDimensions(activeButton);

            setInitialIndicatorProps({
                left,
                width,
            });
        }
    }, [pathname, links]);

    return (
        <Stack
            direction="row"
            width="100%"
            bg="f1.red"
            gap={4}
            display="flex"
            justifyContent="space-between"
            background="f1.red"
            align="center"
            position="relative"
        >
            {links.map(({ id, label, href }) => (
                <Box key={id} flexGrow={1} flexBasis={`${100 / links.length}%`}>
                    <Button
                        ref={(el) => {
                            if (el) {
                                buttonsRef.current[href] = el;
                            }
                        }}
                        visual="navigation"
                        width="100%"
                        onClick={() => handleClick(href)}
                    >
                        {label}
                    </Button>
                </Box>
            ))}
            <motion.div
                initial={false}
                animate={indicatorProps}
                style={{
                    ...initialIndicatorProps,
                    bottom: "0",
                    zIndex: "1",
                    pointerEvents: "none",
                    height: "3px",
                    background: "white",
                    position: "absolute",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            />
        </Stack>
    );
};

export { HeaderNavigation };
