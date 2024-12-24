"use client";
import React from "react";

export const ButtonsCard = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="hover:scale-125 transform transition duration-300 ease-in-out">
      <div className="relative z-40">{children}</div>
    </div>
  );
};
