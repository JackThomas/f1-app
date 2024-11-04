import { Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeaderTitleProps extends HeadingProps {
    children: ReactNode;
}

const HeaderTitle = ({ children, ...rest }: HeaderTitleProps) => {
    return <Heading {...rest}>{children}</Heading>;
};

export { HeaderTitle };
