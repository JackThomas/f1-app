// import {
//     Icon as ChakraIcon,
//     IconProps as ChakraIconProps,
// } from "@chakra-ui/react";

// import { FlagCheckered } from "@phosphor-icons/react/dist/ssr";

// enum IconSource {
//     Phosphor = "phosphor",
// }

// interface IconLibraries {
//     [key: string]: {
//         set: any; // eslint-disable-line @typescript-eslint/no-explicit-any
//     };
// }

// interface IconProps extends ChakraIconProps {
//     icon: string;
//     source?: IconSource;
//     weight?: "fill" | "line";
// }

// const PhosphorIconSet = {
//     FlagCheckered,
// };

// const IconDefaultProps = {
//     source: IconSource.Phosphor,
//     weight: undefined,
// };

// const Icon = ({
//     icon,
//     source = IconDefaultProps.source,
//     ...rest
// }: IconProps) => {
//     const libraries: IconLibraries = {
//         phosphor: {
//             set: PhosphorIconSet,
//         },
//     };

//     const iconSet = libraries[source];
//     const iconComponent = iconSet.set[icon];

//     return <FlagCheckered {...rest} />;
// };

// Icon.defaultProps = IconDefaultProps;

// export { Icon };
