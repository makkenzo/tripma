"use client";

import { Dispatch, SetStateAction } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

interface IncrementInputProps {
    label: string;
    state: number;
    setState: Dispatch<SetStateAction<number>>;
}

const IncrementInput = ({ label, state, setState }: IncrementInputProps) => {
    const handleIncrement = () => {
        if (state < 99) {
            setState(state + 1);
        }
    };

    const handleDecrement = () => {
        if (state > 0) {
            setState(state - 1);
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
                    {state}
                </p>
                <Button variant="increment" size="sm" onClick={handleIncrement}>
                    <Plus size={18} />
                </Button>
            </div>
        </div>
    );
};

export default IncrementInput;
