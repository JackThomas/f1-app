import localFont from "next/font/local";

const F1Font = localFont({
    src: [
        {
            path: "./Formula1-Display-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Formula1-Display-Wide.woff2",
            weight: "550",
            style: "normal",
        },
        {
            path: "./Formula1-Display-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
});

export default F1Font;
