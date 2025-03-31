"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter(); // Use next/router
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTransition = async (e) => {
    e.preventDefault();
    if (isAnimating || !isMounted) return; 
    setIsAnimating(true);

    const tab1 = document.querySelector(".tab1");
    const tab2 = document.querySelector(".tab2");

    tab1?.classList.add("slide-in-left");
    tab2?.classList.add("slide-in-right");

    await sleep(1500); 

    router.push(href);

    setTimeout(() => {
      tab1?.classList.remove("slide-in-left");
      tab2?.classList.remove("slide-in-right");

      tab1?.classList.add("slide-out-left");
      tab2?.classList.add("slide-out-right");

      setTimeout(() => {
        tab1?.classList.remove("slide-out-left");
        tab2?.classList.remove("slide-out-right");
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  if (!isMounted) return null;

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
