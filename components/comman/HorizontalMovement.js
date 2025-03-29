"use client";

import { useState } from "react";

const InfiniteScroll = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cards = [
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
    "Card 5",
    "Card 6",
    "Card 7",
  ];

  return (
    <div className="relative overflow-hidden w-full bg-gray-100 py-10">
      <div
        className={`flex space-x-6 w-max animate-marquee ${
          isHovered ? "paused" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="w-40 h-40 bg-white shadow-md flex items-center justify-center text-lg font-semibold rounded-lg cursor-pointer"
          >
            {card}
          </div>
        ))}
      </div>

      {/* Tailwind CSS animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 10s linear infinite;
            display: flex;
            width: max-content;
          }
          .paused {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default InfiniteScroll;
