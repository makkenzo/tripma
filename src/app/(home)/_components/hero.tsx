"use client";

import { PlaneTakeoff, PlaneLanding, CalendarIcon } from "lucide-react";
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
import { cn } from "@/lib/utils";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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
                    <div className="grid gap-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    id="date"
                                    variant="outline"
                                    className={cn(
                                        "w-[300px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground",
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-5 w-5 text-black/40" />
                                    {date?.from ? (
                                        date.to ? (
                                            <>
                                                {format(date.from, "LLL dd, y")}{" "}
                                                - {format(date.to, "LLL dd, y")}
                                            </>
                                        ) : (
                                            format(date.from, "LLL dd, y")
                                        )
                                    ) : (
                                        <span>Depart - Return</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto p-0"
                                align="start"
                            >
                                {/* <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
                                    <Button>Round trip</Button>
                                    <Button>One way</Button>
                                </div> */}
                                <RadioGroup defaultValue="round-trip">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="round-trip"
                                            id="round-trip"
                                        />
                                        <Label htmlFor="" />
                                    </div>
                                </RadioGroup>
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={today}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={2}
                                    modifiers={{
                                        disabled: [disabledDateModifier],
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
