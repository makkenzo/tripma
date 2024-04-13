"use client";

import { Button } from "@/components/ui/button";
import { placeCards } from "@/data/placecards";
import { IPlaceCard } from "@/types";
import { useEffect, useState } from "react";
import PlaceCard from "./place-card";

interface PlacesToStayProps {}

const PlacesToStay = ({}: PlacesToStayProps) => {
    const [data, setData] = useState<IPlaceCard[]>();

    useEffect(() => {
        setData(placeCards);
    }, []);

    return (
        <div className="my-16">
            <div className="flex justify-between mb-4">
                <h1 className="text-[#6E7491] font-semibold text-xl">
                    Explore unique{" "}
                    <span className="text-tripmaTurquoise">places to stay</span>
                </h1>
                <Button variant="link" className="text-[#6E7491] text-xl">
                    All
                </Button>
            </div>

            {data && data.length > 0 && (
                <div className="flex justify-between">
                    {data.slice(0, 3).map((place) => (
                        <PlaceCard place={place} />
                    ))}
                </div>
            )}

            <Button size="lg" className="mx-auto flex my-20 text-lg">
                Explore more stays
            </Button>
        </div>
    );
};

export default PlacesToStay;
