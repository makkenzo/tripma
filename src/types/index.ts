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

export {
    type Iata,
    type IAirport,
    type IDeal,
    type IPlaceCard,
    type IReview,
    type ILink,
    type ISubmitData,
};
