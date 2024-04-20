"use client";

import AirportSelect from "@/app/(home)/_components/airport-select";
import PeopleSelect from "@/app/(home)/_components/people-select";
import TripDatePicker from "@/app/(home)/_components/trip-date-picker";
import { airports as mockData } from "@/data/airports";
import { fromAtom, passengersAtom, toAtom } from "@/jotai/store";
import { Iata } from "@/types";
import { addDays } from "date-fns";
import { useAtom, useAtomValue } from "jotai";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { toast } from "sonner";
import Loader from "./loader";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface MainInputsProps {
    data?: {
        cityFrom: string;
        cityTo: string;
        date: {
            from: Date;
            to: Date;
        };
        total: string;
    } | null;
    disabled?: boolean;
    className?: string;
}

const MainInputs = ({
    data = null,
    disabled = false,
    className = "",
}: MainInputsProps) => {
    const [iataAndNameValues, setIataAndNameValues] = useState<Iata[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

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

    const router = useRouter();

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

        setFrom(found!);
    };

    const handleSelectTo = (airport: string) => {
        const found = iataAndNameValues.find(
            (x) => x.iata.toLowerCase() === airport,
        );

        setTo(found!);
    };

    const handleSubmit = () => {
        if (!from.name || !to.name || passengers.total === 0) {
            toast.error("err");
            return;
        }

        const data = {
            cityFrom: from,
            cityTo: to,
            date: date,
            passengers: passengers,
        };

        console.log("🚀 ~ handleSubmit ~ data:", data);

        const queryParams = new URLSearchParams({
            cityFrom: data.cityFrom.iata,
            cityTo: data.cityTo.iata,
            fromDate: data.date?.from?.toString() || "",
            toDate: data.date?.to?.toString() || "",
            adults: data.passengers.adults.toString(),
            minors: data.passengers.minors.toString(),
            total: data.passengers.total.toString(),
        }).toString();

        router.push(`/search-results?${queryParams}`);
    };

    if (isLoading) {
        return (
            <div className="h-[200px] flex justify-center items-center">
                <Loader size={40} />
            </div>
        );
    }

    return (
        <div className={cn("flex", className)}>
            <AirportSelect
                data={iataAndNameValues}
                placeholder="From where?"
                onSelect={handleSelectFrom}
                defaultValue={
                    data ? data.cityFrom.toLowerCase() : from.iata.toLowerCase()
                }
                icon={PlaneTakeoff}
                disabled={disabled}
            />
            <AirportSelect
                data={iataAndNameValues}
                placeholder="Where to?"
                onSelect={handleSelectTo}
                defaultValue={
                    data ? data.cityTo.toLowerCase() : to.iata.toLowerCase()
                }
                icon={PlaneLanding}
                disabled={disabled}
            />
            <TripDatePicker
                date={data ? data.date : date}
                today={today}
                setDate={setDate}
                modifier={disabledDateModifier}
                disabled={disabled}
            />
            <PeopleSelect
                customPassengers={Number(data?.total) || null}
                disabled={disabled}
            />
            <Button
                className="rounded-none border-none"
                onClick={handleSubmit}
                disabled={disabled}
            >
                Search
            </Button>
        </div>
    );
};

export default MainInputs;
