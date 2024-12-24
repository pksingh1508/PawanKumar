"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingName( {className}: {className?: string} ) {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-[#1e1e20] dark:bg-grid-white/[0.05] items-center justify-end relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
        className={className}
      />
    </div>
  );
}

const testimonials = [
  {
    quote: " "
  },
  {
    quote: "P"
  },
  {
    quote: "A"
  },
  {
    quote: "W"
  },
  {
    quote: "A"
  },
  {
    quote: "N"
  },
  {
    quote: " "
  },
  {
    quote: "K"
  },
  {
    quote: "U"
  },
  {
    quote: "M"
  },
  {
    quote: "A"
  },
  {
    quote: "R"
  },
  {
    quote: " "
  },
  
];
