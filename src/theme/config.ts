import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { recipes } from "@/theme/recipes";
import { fonts } from "@/theme/tokens/fonts";
import { colors } from "@/theme/tokens/colors";

const config = defineConfig({
    theme: {
        tokens: {
            colors,
            fonts,
        },
        recipes,
    },
});

export const system = createSystem(defaultConfig, config);
