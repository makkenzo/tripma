"use client";

import { Button } from "@/components/ui/button";
import { placeCards as mockPlaces } from "@/data/placecards";
import { IPlaceCard } from "@/types";
import { useEffect, useState } from "react";
import PlaceCard from "./place-card";
import Loader from "@/components/loader";

interface PlacesToStayProps {}

const PlacesToStay = ({}: PlacesToStayProps) => {
    const [data, setData] = useState<IPlaceCard[]>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                setData(mockPlaces);
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
                    Explore unique{" "}
                    <span className="text-tripmaTurquoise">places to stay</span>
                </h1>
                <Button variant="link" className="text-[#6E7491] text-xl">
                    All
                </Button>
            </div>

            {data && data.length > 0 ? (
                <div className="flex justify-between">
                    {data.slice(0, 3).map((place) => (
                        <PlaceCard key={place.id} place={place} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <Loader size={40} />
                </div>
            )}

            <Button size="lg" className="mx-auto flex my-20 text-lg">
                Explore more stays
            </Button>
        </div>
    );
};

export default PlacesToStay;
