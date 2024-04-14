"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { type Iata } from "@/types";
import { SelectIcon } from "@radix-ui/react-select";
import { type LucideIcon, PlaneTakeoff } from "lucide-react";
import { useEffect, useState } from "react";

interface AirportSelectProps {
    data: Iata[];
    placeholder: string;
    onSelect: (airport: string) => void;
    icon: LucideIcon;
    defaultValue: string;
}

const AirportSelect = ({
    data,
    placeholder,
    icon: Icon,
    onSelect,
    defaultValue,
}: AirportSelectProps) => {
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue]);

    const handleValueChange = (value: string) => {
        setSelectedValue(value);
        onSelect(value);
    };

    return (
        <Select onValueChange={handleValueChange} value={selectedValue}>
            <SelectTrigger className="w-[280px]">
                <div className="flex items-center gap-x-4">
                    <SelectIcon>
                        <Icon className="text-black/40" />
                    </SelectIcon>
                    <SelectValue placeholder={placeholder} />
                </div>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {data.map((airport) => (
                        <SelectItem
                            key={airport.iata}
                            value={airport.iata.toLowerCase()}
                        >
                            <SelectLabel>{airport.iata}</SelectLabel>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default AirportSelect;
