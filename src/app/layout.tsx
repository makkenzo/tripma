// Import your globals here
import "@/styles/globals.css";
import { Provider } from "jotai";

import { Inter } from "next/font/google";

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
                    <div>{children}</div>
                </Provider>
            </body>
        </html>
    );
}
