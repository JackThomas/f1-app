import { Heading, HeadingProps, Text, TextProps } from "@chakra-ui/react";
import { useMemo } from "react";

interface NameProps extends TextProps {
    children: string;
}

const FamilyName = ({ children }: NameProps) => (
    <Text as="span">{children}</Text>
);

const GivenName = ({ children }: NameProps) => (
    <Text as="span" fontWeight="400">
        {children}
    </Text>
);

interface DriverNameProps extends HeadingProps {
    givenName: string;
    familyName: string;
    isWesternName?: boolean;
    isPrimary?: boolean;
}

const DriverName = ({
    givenName,
    familyName,
    isWesternName,
    isPrimary,
    ...rest
}: DriverNameProps) => {
    const names = useMemo(() => {
        const array = [
            <GivenName key="given-name">{givenName}</GivenName>,
            " ",
            <FamilyName key="family-name">{familyName}</FamilyName>,
        ];

        if (!isWesternName) {
            return array.reverse();
        }
        return array;
    }, [givenName, familyName, isWesternName]);

    return (
        <Heading
            size={isPrimary ? "md" : "xs"}
            display={isPrimary ? "flex" : "block"}
            lineHeight={1.1}
            flexDirection="column"
            {...rest}
        >
            {names}
        </Heading>
    );
};

export { DriverName };
