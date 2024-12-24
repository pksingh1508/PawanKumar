import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "./ui/flip-words";
// Coding today for AI-driven tomorrows
export function Home() {
  const words = [
    {
      text: "Coding",
    },
    {
      text: "today",
    },
    {
      text: "for",
    },
    {
      text: "AI-driven",
    },
    {
      text: "TOMORROWS.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const word = ["Tech Wizard.", "Mobile Engineer", "Native Developer", "Web Developer", "Penetration Tester"];
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <TypewriterEffectSmooth words={words}/>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Pawan Kumar, <br />
        <div className="my-4">
          {/* <Cover>  */}
            <FlipWords words={word}/>
          {/* </Cover> */}
        </div>
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        React Native Developer <br /> Penetration Tester <br /> Web Developer 
      </p>
    </BackgroundLines>
  );
}
