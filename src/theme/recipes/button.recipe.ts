import { defineRecipe } from "@chakra-ui/react";

export const ButtonRecipe = defineRecipe({
    base: {},
    variants: {
        visual: {
            primary: {
                background: "f1.red",
                color: "white",
                fontFamily: "heading",
                padding: 4,
                height: "auto",
            },
            navigation: {
                background: "transparent",
                borderRadius: "0",
                color: "white",
                fontSize: "md",
                _hover: {
                    background: "transparent",
                },
            },
        },
        size: {},
    },
});
