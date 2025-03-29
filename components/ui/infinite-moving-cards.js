"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setAnimationProperties();
      setStart(true);
    }
  }

  const setAnimationProperties = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const speedMap = {
        fast: "10s",
        normal: "40s",
        slow: "80s"
      };
      containerRef.current.style.setProperty(
        "--animation-duration","15s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative w-[20rem] h-[15rem] flex justify-center items-center rounded-2xl border-zinc-200 bg-[#9fdcff] p-6 md:w-[450px] "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!isHovered && <Image
              src={item.src}
              width={300}
              height={300}
              alt={item.name}
              className="max-w-32 max-h-32 object-cover"
            />}
                {isHovered && 
                    <div className="text-4xl font-bold text-[#292828] flex flex-col">
                        <div>{item.name}</div>
                        <div className="text-sm font-light">{item.description}</div>
                    </div>
                }
          </div>
        ))}
      </div>
    </div>
  );
};
