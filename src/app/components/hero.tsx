"use client";

import SplitText from "@/reactbits/text-animations/SplitText/SplitText";
import CircularText from "@/reactbits/text-animations/CircularText/CircularText";

import React, { useCallback, useMemo, useState } from "react";

const MemoSplitText = React.memo(SplitText);

type GridDistortionProps = {
  grid?: number;
  mouse?: number;
  strength?: number;
  relaxation?: number;
  imageSrc: string;
  className?: string;
};

export default function Hero() {
  const [GridDistortionComp, setGridDistortionComp] =
    useState<React.FC<GridDistortionProps> | null>(null);

  const handleAnimationComplete = useCallback(async () => {
    const mod = await import(
      "@/reactbits/backgrounds/GridDistortion/GridDistortion"
    );
    // Need to wrap in a function that returns the component
    setGridDistortionComp(() => mod.default);
  }, []);

  const from = useMemo(() => ({ opacity: 0, y: 40 }), []);
  const to = useMemo(() => ({ opacity: 1, y: 0 }), []);

  return (
    <section className="mx-auto w-full h-screen relative">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        {GridDistortionComp && (
          <GridDistortionComp
            imageSrc="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            grid={10}
            mouse={0.25}
            strength={0.15}
            relaxation={0.9}
            className=""
          />
        )}
      </div>
      <CircularText
        text="FRONTEND*DEVELOPER*SINCE*2022*"
        onHover="speedUp"
        spinDuration={20}
        className="!absolute !w-96 !h-96 !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 font-extralight"
      />
      <MemoSplitText
        text="Hey, it's Nikhil!"
        className="text-2xl font-bold text-center w-full !absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={from}
        to={to}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </section>
  );
}



