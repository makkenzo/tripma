"use client";

import IncrementInput from "@/components/increment-input";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { passengersAtom } from "@/jotai/store";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { User } from "lucide-react";

interface PeopleSelectProps {}

const PeopleSelect = ({}: PeopleSelectProps) => {
    const [passengers, setPassengers] = useAtom(passengersAtom);

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
                    {passengers.total !== 0
                        ? `${passengers.total} Passengers`
                        : "Passengers"}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="flex flex-col gap-4">
                    <IncrementInput
                        label="Adults"
                        state={passengers}
                        setState={setPassengers}
                        stateKey="adults"
                    />
                    <IncrementInput
                        label="Minors"
                        state={passengers}
                        setState={setPassengers}
                        stateKey="minors"
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default PeopleSelect;
