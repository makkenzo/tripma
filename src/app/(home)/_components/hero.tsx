"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { airports } from "@/data/airports";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { CalendarIcon, PlaneLanding, PlaneTakeoff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import AirportSelect from "./airport-select";
import TripDatePicker from "./trip-date-picker";

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

    const today = new Date();

    const [date, setDate] = useState<DateRange | undefined>({
        from: today,
        to: addDays(today, 7),
    });

    const [tripType, setTripType] = useState<"Round Trip" | "One Way">(
        "Round Trip",
    );

    const disabledDateModifier = { before: today };

    return (
        <div className="relative">
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
                <div className="flex shadow-[-1px_11px_38px_14px_#936E9122]">
                    <AirportSelect
                        data={iataAndNameValues}
                        placeholder="From where?"
                        onSelect={() => {}}
                        icon={PlaneTakeoff}
                    />
                    <AirportSelect
                        data={iataAndNameValues}
                        placeholder="Where to?"
                        onSelect={() => {}}
                        icon={PlaneLanding}
                    />
                    <TripDatePicker
                        date={date}
                        today={today}
                        setDate={setDate}
                        modifier={disabledDateModifier}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
