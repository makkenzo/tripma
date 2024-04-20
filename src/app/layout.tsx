// Import your globals here
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "jotai";

import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = {
    title: "Tripma",
    description: "Tripma",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider>
                    <ClerkProvider>
                        {children}
                        <Toaster />
                    </ClerkProvider>
                </Provider>
            </body>
        </html>
    );
}
