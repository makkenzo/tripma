"use client";

import { reviews } from "@/data/review";
import { IReview } from "@/types";
import { useEffect, useState } from "react";
import Review from "./review";
import Loader from "@/components/loader";

const Testimonials = () => {
    const [data, setData] = useState<IReview[]>();

    useEffect(() => {
        setData(reviews);
    }, []);

    return (
        <div className="my-16">
            <h1 className="text-[#6E7491] font-semibold text-center text-2xl">
                What <span className="text-purpleBlue">Tripma</span> users are
                saying
            </h1>
            <div className="flex justify-between my-8">
                {data && data.length > 0 ? (
                    data.map((review) => (
                        <Review key={review.id} review={review} />
                    ))
                ) : (
                    <div className="flex justify-center items-center">
                        <Loader size={40} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Testimonials;
