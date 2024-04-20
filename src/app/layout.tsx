// Import your globals here
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "jotai";

import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const font = Poppins({ subsets: ["latin"], weight: ["100", "200"] });

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
            <body className={font.className}>
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
