"use client";

import { footerLinks } from "@/data/footer-links";
import Logo from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="max-w-[1360px] w-full mx-auto">
            <div className="flex justify-between py-36">
                <Logo />

                {footerLinks.map((column, index) => (
                    <div key={index}>
                        <h2 className="text-lg font-semibold text-[#6E7491]">
                            {column.parent}
                        </h2>
                        <ul className="mt-4">
                            {column.childs.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link href={`#${link.value}`}>
                                        <Button
                                            variant="link"
                                            className="text-sm text-[#7C8DB0] px-0"
                                        >
                                            {link.label}
                                        </Button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
