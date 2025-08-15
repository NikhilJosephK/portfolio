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
  const [isHelloWorldHidden, setIsHelloWorldHidden] = useState<boolean>(false);
  const [intro, setIntro] = useState<React.ReactNode | null>(null);

  const from = useMemo(() => ({ opacity: 0, y: 40 }), []);
  const to = useMemo(() => ({ opacity: 1, y: 0 }), []);

  const handleAnimationComplete = useCallback(async () => {
    setIsHelloWorldHidden(true);
    const mod = await import(
      "@/reactbits/backgrounds/GridDistortion/GridDistortion"
    );
    // Need to wrap in a function that returns the component
    setGridDistortionComp(() => mod.default);
    setIntro(() => (
      <MemoSplitText
        text="I'm (Nick)hil"
        className="text-2xl font-medium text-center w-full !absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={from}
        to={to}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    ));
  }, []);

  return (
    <section className="mx-auto w-full h-screen relative">
      <CircularText
        text="FRONTEND*DEVELOPER*SINCE*2022*"
        onHover="speedUp"
        spinDuration={4}
        className="h-[500px] w-full font-extralight !absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2"
      />
      <CircularText
        text="FRONTEND*DEVELOPER*SINCE*2022*"
        onHover="speedUp"
        spinDuration={6}
        className="h-[600px] w-full font-extralight !absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2"
      />
      <CircularText
        text="FRONTEND*DEVELOPER*SINCE*2022*"
        onHover="speedUp"
        spinDuration={8}
        className="h-[700px] w-full font-extralight !absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2"
      />
      <CircularText
        text="FRONTEND*DEVELOPER*SINCE*2022*"
        onHover="speedUp"
        spinDuration={10}
        className="h-[800px] w-full font-extralight !absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2"
      />
      <div
        className={`max-w-6xl mx-auto 
         rounded-3xl absolute top-1/2 tra left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden w-full h-[500px]`}
      >
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          {GridDistortionComp && (
            <GridDistortionComp
              imageSrc="https://images.unsplash.com/photo-1548159417-f283998827c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0"
              grid={10}
              mouse={0.25}
              strength={0.15}
              relaxation={0.9}
              className="w-full h-full"
            />
          )}
        </div>
        <CircularText
          text="FRONTEND*DEVELOPER*SINCE*2022*"
          onHover="speedUp"
          spinDuration={isHelloWorldHidden ? 20 : 2}
          className="!absolute !w-96 !h-96 !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 font-extralight"
        />
        {!isHelloWorldHidden && (
          <MemoSplitText
            text="Hello World!"
            className="text-2xl font-medium text-center w-full !absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2"
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
        )}
        {intro || null}
      </div>
    </section>
  );
}



