"use client";

import { Loader2 } from "lucide-react";

interface LoaderProps {
    size?: number;
}

const Loader = ({ size = 20 }: LoaderProps) => {
    return <Loader2 className="animate-spin text-purpleBlue" size={size} />;
};

export default Loader;
