import "@/assets/styles/globals.scss";
import type { Metadata } from "next";

import { fontClassName } from "@/assets/fonts";
import { ReactNode } from "react";
import { Provider } from "./provider";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <ViewTransitions>
            <html lang="en" suppressHydrationWarning>
                <body className={fontClassName}>
                    <Provider>{children}</Provider>
                </body>
            </html>
        </ViewTransitions>
    );
}
