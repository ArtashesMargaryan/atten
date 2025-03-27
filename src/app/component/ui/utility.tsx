"use client";

import React from "react";

type StarRatingProps = {
  rating: number; // should be between 0 and 5
};

export default function StarRating({ rating }: StarRatingProps) {
  const MAX_STARS = 5;

  // Clamp rating between 0 and 5
  const validRating = Math.max(0, Math.min(rating, MAX_STARS));

  return (
    <div className="flex space-x-1">
      {Array.from({ length: MAX_STARS }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < validRating ? "#facc15" : "transparent"} // yellow or transparent
          stroke="#facc15" // yellow border
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.823 1.536 8.224L12 18.896l-7.472 4.457 1.536-8.224L0 9.306l8.332-1.151z" />
        </svg>
      ))}
    </div>
  );
}
