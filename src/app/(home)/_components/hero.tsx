"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

interface HeroProps {}

const Hero = ({}: HeroProps) => {
    return (
        <div className="relative">
            <Image
                src="/images/world-map.png"
                alt="hero-bg"
                width={1600}
                height={798}
                className="absolute -z-10"
            />
            <h1>It's more than just a trip</h1>
            <div className="flex">
                <Select>
                    <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder="From where?" />
                    </SelectTrigger>
                </Select>
                <Select>
                    <SelectTrigger className="w-[280px]">
                        <Input placeholder="Where to?" />
                    </SelectTrigger>
                </Select>
            </div>
        </div>
    );
};

export default Hero;
