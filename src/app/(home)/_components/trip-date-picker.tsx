"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";

interface TripDatePickerProps {
    date: DateRange | undefined;
    today: Date;
    setDate: Dispatch<SetStateAction<DateRange | undefined>>;
    modifier: { before: Date };
}

const TripDatePicker = ({
    date,
    today,
    setDate,
    modifier,
}: TripDatePickerProps) => {
    return (
        <div className="grid gap-2">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant="outline"
                        className={cn(
                            "w-[300px] justify-start text-left font-normal",
                            !date && "text-muted-foreground",
                        )}
                    >
                        <CalendarIcon className="mr-2 h-5 w-5 text-black/40" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Depart - Return</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-auto p-0"
                    align="start"
                    sideOffset={-300}
                    side="left"
                >
                    <div className="flex justify-between px-4 py-2">
                        <RadioGroup defaultValue="round-trip">
                            <div className="flex items-center space-x-4 ">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="round-trip"
                                        id="round-trip"
                                    />
                                    <Label htmlFor="round-trip">
                                        Round trip
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="one-way"
                                        id="one-way"
                                    />
                                    <Label htmlFor="one-way">One way</Label>
                                </div>
                            </div>
                        </RadioGroup>
                        <div className="flex gap-x-2">
                            <Input
                                placeholder="Depart - Return"
                                className="w-[200px] ring-0 ring-offset-0 text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                                readOnly
                            />
                            <Button>Done</Button>
                        </div>
                    </div>
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={today}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                        modifiers={{
                            disabled: [modifier],
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default TripDatePicker;
