// Import your globals here
import Navbar from "@/components/nav-bar";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = {
    title: "New page title here",
    description: "Sample description",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="max-w-[1360px] w-full mx-auto">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
