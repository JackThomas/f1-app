import { defineRecipe } from "@chakra-ui/react";

export const BadgeRecipe = defineRecipe({
    base: {},
    variants: {
        visual: {
            points: {
                bg: "#F0F0F0",
                color: "#15151E",
                borderRadius: "100px",
                width: "80px",
                height: "32px",
                textAlign: "center",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            },
        },
        size: {},
    },
});
