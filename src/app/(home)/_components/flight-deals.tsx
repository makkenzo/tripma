"use client";

import { Button } from "@/components/ui/button";
import { deals as mockDeals } from "@/data/deals";
import { IDeal } from "@/types";
import { useEffect, useState } from "react";
import Deal from "./deal";
import Loader from "@/components/loader";

const FlightDeals = () => {
    const [data, setData] = useState<IDeal[]>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                setData(mockDeals);
            } catch (error) {
                console.error("Error fetching flight deals:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="my-16">
            <div className="flex justify-between mb-4">
                <h1 className="text-[#6E7491] font-semibold text-xl">
                    Find your next adventure with these{" "}
                    <span className="text-purpleBlue">flight deals</span>
                </h1>
                <Button variant="link" className="text-[#6E7491] text-xl">
                    All
                </Button>
            </div>
            <div className="flex flex-col gap-8">
                {data && data.length > 0 ? (
                    <>
                        <div className="flex justify-between">
                            {data.slice(0, 3).map((deal) => (
                                <Deal key={deal.id} deal={deal} />
                            ))}
                        </div>
                        <Deal deal={data[3]!} fullSize />
                    </>
                ) : (
                    <div className="flex justify-center items-center">
                        <Loader size={40} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FlightDeals;
