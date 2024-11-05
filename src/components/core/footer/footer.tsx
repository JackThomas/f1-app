import { Stack } from "@chakra-ui/react";
import { FooterLink } from "./footer-link";
import {
    Article,
    BaseballHelmet,
    FlagCheckered,
    PlayCircle,
    Trophy,
} from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
    const navigation = [
        { href: "/", icon: <Article />, label: "Latest" },
        { href: "/video", icon: <PlayCircle />, label: "Video" },
        { href: "/racing", icon: <FlagCheckered />, label: "Racing" },
        {
            href: `/standings`,
            icon: <BaseballHelmet />,
            label: "Standings",
        },
        { href: "/fantasy", icon: <Trophy />, label: "Fantasy" },
    ];
    return (
        <Stack
            direction="row"
            background="white"
            align="center"
            justify="space-evenly"
            padding={4}
            borderTop="1px solid #e1e1e1"
            height="80px"
        >
            {navigation.map((item) => (
                <FooterLink key={item.href} {...item} />
            ))}
        </Stack>
    );
};

export { Footer };
