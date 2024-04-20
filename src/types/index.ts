import { RESET } from "jotai/utils";

interface Iata {
    iata: string;
    name: string | null;
}

interface IAirport {
    iata: string;
    name: string;
    city: string;
    country: string;
}

interface IDeal {
    id: string;
    name: string;
    city: string;
    description: string;
    image: string;
    price: number;
}

interface IPlaceCard {
    id: string;
    title: string;
    country: string;
    description: string;
    image: string;
}

interface IReview {
    id: string;
    name: string;
    image: string;
    city: string;
    country: string;
    date: Date;
    stars: number;
    review: string;
}

interface ILink {
    parent: string;
    childs: {
        label: string;
        value: string;
    }[];
}

interface ISubmitData {
    from: Iata;
    to: Iata;
    date: {
        from: Date;
        to: Date;
    };
    roundTrip: boolean;
    passengers: {
        adults: number;
        minors: number;
        total: number;
    };
}

interface IPassengers {
    adults: number;
    minors: number;
    total: number;
    [key: string]: number;
}

type SetAtom<Args extends any[], Result> = (...args: Args) => Result;
type SetStateActionWithReset<Value> =
    | Value
    | typeof RESET
    | ((prev: Value) => Value | typeof RESET);

export {
    type Iata,
    type IAirport,
    type IDeal,
    type IPlaceCard,
    type IReview,
    type ILink,
    type ISubmitData,
    type IPassengers,
    type SetAtom,
    type SetStateActionWithReset,
};
