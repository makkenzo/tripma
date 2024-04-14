"use client";

import { footerLinks } from "@/data/footer-links";
import Logo from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";
import ButtonToStore from "./button-to-store";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <>
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
                                        <Link href={`/${link.value}`}>
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
                            {index === footerLinks.length - 1 && (
                                <div className="flex flex-col gap-4">
                                    <ButtonToStore
                                        url="https://apps.apple.com/ru/app/telegram-messenger/id686449807"
                                        store="ios"
                                    />
                                    <ButtonToStore
                                        url="https://play.google.com/store/apps/details?id=org.telegram.messenger"
                                        store="play-store"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="max-w-[1360px] w-full mx-auto flex justify-between my-8 text-[#6E7491]">
                <div className="flex gap-4">
                    <Link href="" className="hover:text-[#484c5e]">
                        <Twitter />
                    </Link>
                    <Link href="" className="hover:text-[#484c5e]">
                        <Facebook />
                    </Link>
                    <Link href="" className="hover:text-[#484c5e]">
                        <Instagram />
                    </Link>
                </div>
                <p>© 2024 Tripma incorporated</p>
            </div>
        </>
    );
};

export default Footer;
