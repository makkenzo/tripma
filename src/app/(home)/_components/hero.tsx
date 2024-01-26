"use client";

import { PlaneTakeoff, PlaneLanding } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectGroup,
} from "@/components/ui/select";
import { airports } from "@/data/airports";
import Image from "next/image";
import { SelectIcon } from "@radix-ui/react-select";

interface HeroProps {}

interface Iata {
    iata: string;
    name: string | null;
}

const Hero = ({}: HeroProps) => {
    const iataAndNameValues: Iata[] = airports.map((airport) => ({
        iata: airport.iata,
        name: airport.name,
    }));

    return (
        <div className="relative">
            <Image
                src="/images/world-map.png"
                alt="hero-bg"
                width={1600}
                height={798}
                className="absolute -z-10"
            />
            <div className="flex flex-col justify-between h-[30rem]">
                <div className="bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text font-bold">
                    <h1 className="mx-auto text-[6rem] text-center leading-[5rem] my-32">
                        It's more than <br /> just a trip
                    </h1>
                </div>
                <div className="flex">
                    <Select>
                        <SelectTrigger className="w-[280px]">
                            <div className="flex items-center gap-x-4">
                                <SelectIcon>
                                    <PlaneTakeoff className="text-black/40" />
                                </SelectIcon>
                                <SelectValue placeholder="From where?" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {iataAndNameValues.map((airport) => (
                                    <SelectItem
                                        key={airport.iata}
                                        value={airport.iata.toLowerCase()}
                                    >
                                        <SelectLabel>
                                            {airport.iata}
                                        </SelectLabel>
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[280px]">
                            <div className="flex items-center gap-x-4">
                                <SelectIcon>
                                    <PlaneLanding className="text-black/40" />
                                </SelectIcon>
                                <SelectValue placeholder="Where to?" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {iataAndNameValues.map((airport) => (
                                    <SelectItem
                                        key={airport.iata}
                                        value={airport.iata.toLowerCase()}
                                    >
                                        <SelectLabel>
                                            {airport.iata}
                                        </SelectLabel>
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default Hero;
