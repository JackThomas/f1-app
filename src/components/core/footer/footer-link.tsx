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

    const isActive = useMemo(() => pathname === href, [pathname, href]);

    return (
        <Link href={href}>
            <Stack align="center">
                <Box
                    {...(isActive && {
                        color: "#e10600",
                    })}
                >
                    {icon}
                </Box>
                <Text
                    {...(isActive && {
                        color: "#e10600",
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
