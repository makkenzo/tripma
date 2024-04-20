"use client";

import { IPassengers, SetAtom, SetStateActionWithReset } from "@/types";
import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";

interface IncrementInputProps {
    label: string;
    state: IPassengers;
    setState: SetAtom<[SetStateActionWithReset<IPassengers>], void>;
    stateKey: string;
}

const IncrementInput = ({
    label,
    state,
    setState,
    stateKey,
}: IncrementInputProps) => {
    const handleIncrement = () => {
        if (state[stateKey]! < 99) {
            setState((prevState) => ({
                ...prevState,
                [stateKey]: prevState[stateKey]! + 1,
                total: prevState.adults + prevState.minors + 1,
            }));
        }
    };

    const handleDecrement = () => {
        if (state[stateKey]! > 0) {
            setState((prevState) => ({
                ...prevState,
                [stateKey]: prevState[stateKey]! - 1,
                total: prevState.adults + prevState.minors - 1,
            }));
        }
    };

    return (
        <div className="flex justify-between items-center">
            <p className="text-[#6E7491]">{label}:</p>

            <div className="flex items-center gap-4">
                <Button variant="increment" size="sm" onClick={handleDecrement}>
                    <Minus size={18} />
                </Button>
                <p className="text-[#6E7491] text-lg w-5 text-center">
                    {state[stateKey]}
                </p>
                <Button variant="increment" size="sm" onClick={handleIncrement}>
                    <Plus size={18} />
                </Button>
            </div>
        </div>
    );
};

export default IncrementInput;
