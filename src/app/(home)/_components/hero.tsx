"use client";

import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { airports as mockData } from "@/data/airports";
import { fromAtom, passengersAtom, toAtom } from "@/jotai/store";
import { Iata } from "@/types";
import { addDays } from "date-fns";
import { useAtom, useAtomValue } from "jotai";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import AirportSelect from "./airport-select";
import PeopleSelect from "./people-select";
import TripDatePicker from "./trip-date-picker";

const Hero = () => {
    const [airports, setAirports] = useState<Iata[]>();
    const [iataAndNameValues, setIataAndNameValues] = useState<Iata[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                setAirports(mockData);
                setIataAndNameValues(
                    mockData.map((airport) => ({
                        iata: airport.iata,
                        name: airport.name,
                    })),
                );
            } catch (error) {
                console.error("Error fetching flight deals:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const today = new Date();

    const [date, setDate] = useState<DateRange | undefined>({
        from: today,
        to: addDays(today, 7),
    });

    const [tripType, setTripType] = useState<"Round Trip" | "One Way">(
        "Round Trip",
    );

    const disabledDateModifier = { before: today };

    const [from, setFrom] = useAtom(fromAtom);
    const [to, setTo] = useAtom(toAtom);
    const passengers = useAtomValue(passengersAtom);

    const handleSelectFrom = (airport: string) => {
        const found = iataAndNameValues.find(
            (x) => x.iata.toLowerCase() === airport,
        );

        console.log("from", found);

        setFrom(found!);
    };

    const handleSelectTo = (airport: string) => {
        const found = iataAndNameValues.find(
            (x) => x.iata.toLowerCase() === airport,
        );

        console.log("to", found);

        setTo(found!);
    };

    const handleSubmit = () => {
        const data = {
            cityFrom: from,
            cityTo: to,
            date: date,
            passengers: passengers,
        };

        console.log("🚀 ~ handleSubmit ~ data:", data);
    };

    if (isLoading) {
        return (
            <div className="h-[800px] flex justify-center items-center">
                <Loader size={40} />
            </div>
        );
    }

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
                <div className="flex shadow-[-1px_11px_38px_14px_#936E9122]">
                    <AirportSelect
                        data={iataAndNameValues}
                        placeholder="From where?"
                        onSelect={handleSelectFrom}
                        defaultValue={from.iata.toLowerCase()}
                        icon={PlaneTakeoff}
                    />
                    <AirportSelect
                        data={iataAndNameValues}
                        placeholder="Where to?"
                        onSelect={handleSelectTo}
                        defaultValue={to.iata.toLowerCase()}
                        icon={PlaneLanding}
                    />
                    <TripDatePicker
                        date={date}
                        today={today}
                        setDate={setDate}
                        modifier={disabledDateModifier}
                    />
                    <PeopleSelect />
                    <Button
                        className="rounded-none border-none"
                        onClick={handleSubmit}
                    >
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
