"use client";

import Image from "next/image";
import MainInputs from "@/components/main-inputs";

const Hero = () => {
    return (
        <div className="relative h-[800px]">
            <Image
                src="/images/world-map.png"
                alt="hero-bg"
                width={1600}
                height={798}
                className="absolute -z-10"
            />
            <div className="flex flex-col justify-between items-center">
                <div className="bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text font-bold">
                    <h1 className="mx-auto text-[7rem] text-center leading-[6rem] my-28">
                        It's more than <br /> just a trip
                    </h1>
                </div>
                <MainInputs />
            </div>
        </div>
    );
};

export default Hero;
