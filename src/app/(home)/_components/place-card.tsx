"use client";

import { IPlaceCard } from "@/types";
import Image from "next/image";

interface PlaceCardProps {
    place: IPlaceCard;
}

const PlaceCard = ({ place }: PlaceCardProps) => {
    return (
        <div className="rounded-md bg-white shadow-lg hover:cursor-pointer hover:shadow-2xl transition-shadow duration-300 w-[410px]">
            <Image
                src={place.image}
                alt="city"
                width={411}
                height={397}
                className="object-contain rounded-t-xl"
            />

            <div className="py-4 px-6">
                <div className="flex justify-between text-[#6E7491] text-lg">
                    <p>
                        {place.title},{" "}
                        <span className="text-tripmaTurquoise">
                            {place.country}
                        </span>
                    </p>
                </div>
                <p className="text-[#7C8DB0]">{place.description}</p>
            </div>
        </div>
    );
};

export default PlaceCard;
