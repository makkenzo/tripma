// Import your globals here
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "jotai";

import { Nunito_Sans, Poppins } from "next/font/google";
import { Toaster } from "sonner";

const font = Nunito_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
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
