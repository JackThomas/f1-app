import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.scss";
import { Provider } from "./provider";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}