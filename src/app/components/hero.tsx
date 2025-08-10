"use client";

import SplitText from "@/reactbits/text-animations/SplitText/SplitText";
import CircularText from "@/reactbits/text-animations/CircularText/CircularText";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="mx-auto w-full h-screen relative">
      <CircularText
        text="FRONTEND*DEVELOPER*SINCE*2022*"
        onHover="speedUp"
        spinDuration={20}
        className="!absolute !w-96 !h-96 !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2"
      />
      <SplitText
        text="Hey, it's (Nick)hil!"
        className="text-2xl font-semibold text-center w-full !absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </section>
  );
}
