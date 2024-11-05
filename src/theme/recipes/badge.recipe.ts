import { defineRecipe } from "@chakra-ui/react";

export const BadgeRecipe = defineRecipe({
    base: {},
    variants: {
        visual: {
            points: {
                bg: "#F0F0F0",
                color: "f1.darkgrey",
                borderRadius: "100px",
                width: "70px",
                height: "28px",
                fontSize: "xs",
                textAlign: "center",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            },
        },
        size: {},
    },
});
