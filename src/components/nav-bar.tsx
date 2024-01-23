import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";

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
    return (
        <nav className="flex items-center justify-between">
            <Logo />
            <ul className="flex my-4">
                {navLinks.map((link) => (
                    <li key={link.title}>
                        <Link href={link.href}>
                            <Button variant={link.variant} size="lg">
                                {link.title}
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
