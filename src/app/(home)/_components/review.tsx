"use client";

import { formatDate } from "@/lib/utils";
import { IReview } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface ReviewProps {
    review: IReview;
}

const MAX_TEXT_LENGTH = 170;

const Review = ({ review }: ReviewProps) => {
    const [showFullText, setShowFullText] = useState(false);

    const renderStars = (numberOfStars: number) => {
        const filledStars = "★".repeat(numberOfStars);
        const emptyStars = "☆".repeat(5 - numberOfStars);
        return filledStars + emptyStars;
    };

    const renderReviewText = (text: string) => {
        if (text.length > MAX_TEXT_LENGTH && !showFullText) {
            return (
                <>
                    {text.slice(0, MAX_TEXT_LENGTH)}
                    <span
                        className="text-purpleBlue cursor-pointer"
                        onClick={() => setShowFullText(true)}
                    >
                        ...<a>read more</a>
                    </span>
                </>
            );
        }
        return text;
    };

    return (
        <div className="flex gap-4 items-start w-1/3">
            <Image src={review.image} alt="user" width={48} height={48} />
            <div className="flex flex-col gap-2">
                <div className="text-[#6E7491]">
                    <p className="font-semibold">{review.name}</p>
                    <p>
                        {review.city}, {review.country} |{" "}
                        {formatDate(review.date)}
                    </p>
                </div>
                <p className="text-xl text-purpleBlue">
                    {renderStars(review.stars)}
                </p>
                <p>{renderReviewText(review.review)}</p>
            </div>
        </div>
    );
};

export default Review;
