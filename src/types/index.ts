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

export { type Iata, type IAirport, type IDeal };
