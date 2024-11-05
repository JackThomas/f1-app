"use client";

import Link from "next/link";
import { Text, Stack, Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface FooterLinkProps {
    href: string;
    icon: JSX.Element;
    label: string;
}

const FooterLinkDefaultProps = {};

const FooterLink = ({ href, icon, label }: FooterLinkProps) => {
    const pathname = usePathname();

    const isActive = useMemo(() => {
        const segment = `/${pathname.split("/")[1]}`;
        return segment === href;
    }, [pathname, href]);

    return (
        <Link href={href}>
            <Stack align="center">
                <Box
                    fontSize="20px"
                    {...(isActive && {
                        color: "f1.red",
                    })}
                >
                    {icon}
                </Box>
                <Text
                    fontSize="xs"
                    {...(isActive && {
                        color: "f1.red",
                    })}
                >
                    {label}
                </Text>
            </Stack>
        </Link>
    );
};

FooterLink.defaultProps = FooterLinkDefaultProps;

export { FooterLink };
