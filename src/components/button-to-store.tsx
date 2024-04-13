"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

interface ButtonToStoreProps {
    url: string;
    store: "ios" | "play-store";
}

const ButtonToStore = ({ url, store }: ButtonToStoreProps) => {
    return (
        <Link href={url} target="_blank">
            <Button variant="store" size="store" className="justify-start">
                <div className="flex gap-2">
                    <Image
                        src={
                            store === "ios"
                                ? "/svgs/Apple-light.svg"
                                : "/svgs/Google-Play.svg"
                        }
                        alt={store === "ios" ? "apple" : "play-store"}
                        width={38}
                        height={38}
                    />
                    <div className="flex flex-col items-start">
                        <p className="font-semibold">
                            {store === "ios" ? "Download on the" : "GET IT ON"}
                        </p>
                        <p className="font-bold text-2xl leading-3">
                            {store === "ios" ? "App Store" : "Google Play"}
                        </p>
                    </div>
                </div>
            </Button>
        </Link>
    );
};

export default ButtonToStore;
