"use client";

import MainInputs from "@/components/main-inputs";
import Navbar from "@/components/nav-bar";
import { useSearchParams } from "next/navigation";

interface FlightsProps {}

const Flights = ({}: FlightsProps) => {
    const searchParams = useSearchParams();

    const cityFrom = searchParams.get("cityFrom");
    const cityTo = searchParams.get("cityTo");
    const fromDate = searchParams.get("fromDate");
    const toDate = searchParams.get("toDate");
    const adults = searchParams.get("adults");
    const minors = searchParams.get("minors");
    const total = searchParams.get("total");

    const data = {
        cityFrom: cityFrom!,
        cityTo: cityTo!,
        date: { from: new Date(fromDate!), to: new Date(toDate!) },
        total: total!,
    };

    return (
        <div className="max-w-[1360px] w-full mx-auto">
            <Navbar />

            <div className="w-fit mt-8">
                <MainInputs data={data} disabled />
            </div>
        </div>
    );
};

export default Flights;
