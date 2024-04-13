"use client";

import { IDeal } from "@/types";
import Image from "next/image";

interface DealProps {
    deal: IDeal;
    fullSize?: boolean;
}

const Deal = ({ deal, fullSize = false }: DealProps) => {
    return (
        <div className="rounded-md bg-white shadow-lg hover:cursor-pointer hover:shadow-2xl transition-shadow duration-300">
            <Image
                src={deal.image}
                alt="city"
                width={fullSize ? 1500 : 411}
                height={397}
                className="object-contain rounded-t-xl"
            />

            <div className="py-4 px-6">
                <div className="flex justify-between text-[#6E7491] text-lg">
                    <p>
                        {deal.name},{" "}
                        <span className="text-[#605DEC]">{deal.city}</span>
                    </p>
                    <p>${deal.price}</p>
                </div>
                <p className="text-[#7C8DB0]">{deal.description}</p>
            </div>
        </div>
    );
};

export default Deal;
