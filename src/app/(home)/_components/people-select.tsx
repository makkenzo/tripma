"use client";

import IncrementInput from "@/components/increment-input";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

interface PeopleSelectProps {}

const PeopleSelect = ({}: PeopleSelectProps) => {
    const [adults, setAdults] = useState(1);
    const [minors, setMinors] = useState(0);
    const [totalPassengers, setTotalPassengers] = useState(0);

    useEffect(() => {
        setTotalPassengers(adults + minors);
    }, [adults, minors]);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    id="passengers"
                    variant="outline"
                    className={cn(
                        "w-[200px] justify-start text-left font-normal rounded-none",
                    )}
                >
                    <User className="mr-2 h-5 w-5 text-black/40" />
                    {totalPassengers !== 0
                        ? `${totalPassengers} Passengers`
                        : "Passengers"}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="flex flex-col gap-4">
                    <IncrementInput
                        label="Adults"
                        state={adults}
                        setState={setAdults}
                    />
                    <IncrementInput
                        label="Minors"
                        state={minors}
                        setState={setMinors}
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default PeopleSelect;
