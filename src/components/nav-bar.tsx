"use client";

import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

interface NavLinksProps {
    title: string;
    href: string;
    variant:
        | "default"
        | "destructive"
        | "inactive"
        | "outline"
        | "secondary"
        | "ghost"
        | "link"
        | null
        | undefined;
}

const navLinks: NavLinksProps[] = [
    {
        title: "Flights",
        href: "/",
        variant: "link",
    },
    {
        title: "Hotels",
        href: "/hotels",
        variant: "link",
    },
    {
        title: "Packages",
        href: "/packages",
        variant: "link",
    },
    {
        title: "Sign in",
        href: "/sign-in",
        variant: "link",
    },
    {
        title: "Sign up",
        href: "/sign-up",
        variant: "default",
    },
];

const Navbar = () => {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) return null;

    return (
        <nav className="flex items-center justify-between">
            <Logo />
            <ul className="flex my-4 items-center">
                {navLinks.map((link) => {
                    if (
                        isSignedIn &&
                        (link.title === "Sign in" || link.title === "Sign up")
                    ) {
                        return null;
                    }

                    return (
                        <li key={link.title}>
                            <Link href={link.href}>
                                <Button variant={link.variant} size="lg">
                                    {link.title}
                                </Button>
                            </Link>
                        </li>
                    );
                })}

                {isSignedIn && <UserButton afterSignOutUrl="/" />}
            </ul>
        </nav>
    );
};

export default Navbar;
