"use client";

import { Button } from "@/components/ui/button";
import { deals } from "@/data/deals";
import Deal from "./deal";
import { useEffect, useState } from "react";
import { IDeal } from "@/types";

const FlightDeals = () => {
    const [data, setData] = useState<IDeal[]>();

    useEffect(() => {
        setData(deals);
    }, []);

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-[#6E7491] font-semibold">
                    Find your next adventure with these{" "}
                    <span className="text-purpleBlue">flight deals</span>
                </h1>
                <Button
                    variant="link"
                    className="text-[#6E7491] text-lg flex gap-2 items-center"
                >
                    All
                </Button>
            </div>
            <div className="flex flex-col gap-8">
                {data && data.length > 0 && (
                    <>
                        <div className="flex justify-between">
                            {data.slice(0, 3).map((deal) => (
                                <Deal deal={deal} />
                            ))}
                        </div>
                        <Deal deal={data[3]!} fullSize />
                    </>
                )}
            </div>
        </>
    );
};

export default FlightDeals;
