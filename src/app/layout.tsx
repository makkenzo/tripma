// Import your globals here
import "@/styles/globals.css";

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
                <div>{children}</div>
            </body>
        </html>
    );
}
