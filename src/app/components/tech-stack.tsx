"use client";

import { useEffect, useState } from "react";
import { BigArrow } from "./icons/big-arrow";
import FlyingPosters from "@/reactbits/components/FlyingPosters/FlyingPosters";

export function TechStack() {
  const items = [
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-1.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-2.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-3.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-4.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-5.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-6.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-7.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-8.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-9.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-10.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-11.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-12.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-13.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-14.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-15.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-16.png",
    "https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/portfolio-stack-17.png",
  ];
  const [time, setTime] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setTime(new Date().getHours() + ":" + new Date().getMinutes());
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section>
      <div className="flex flex-col h-screen justify-start">
        <div className="flex justify-center items-center bg-black rounded-[15px] overflow-auto h-20">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`${
                index === 1
                  ? "basis-[800px] max-xl:basis-[500px] md:shrink-0"
                  : "basis-full"
              } border-[0.5px] border-black h-full w-full bg-white ${
                index === 2 ? "max-[900px]:hidden" : ""
              }`}
            />
          ))}
        </div>
        <div className="flex justify-center items-stretch bg-black  overflow-auto h-full">
          <div className="basis-full  border-[0.5px] border-black w-full bg-white h-full rounded-[20px] rounded-br-[100px]">
            <p className="text-black font-light text-sm md:p-5 leading-6 py-5 px-3 max-md:text-xs">
              Back in 2022, Started my journey with just HTML, CSS and
              JAVASCRIPT. Came a long way since then, picked up a few things on
              the way and my pocket still ain&apos;t full!
            </p>
          </div>
          {/*  */}
          <div className="basis-[800px] max-xl:basis-[500px] md:shrink-0  border-[0.5px] border-black w-full bg-white h-full rounded-[20px]">
            <div style={{ height: "100%", position: "relative" }}>
              <FlyingPosters
                items={items}
                planeWidth={isMobile ? 200 : 250}
                planeHeight={isMobile ? 200 : 250}
              />
            </div>
          </div>
          {/*  */}
          <div className="basis-full border-[0.5px] border-black w-full bg-white h-full rounded-[20px] flex items-end justify-between flex-col max-[900px]:hidden">
            <p className="text-4xl text-black w-full text-left pt-5 pl-5 font-light flex flex-col">
              {time}
            </p>
            <div className="flex items-end gap-4 justify-end pr-5 pb-5">
              <p className="text-black font-light text-base leading-tight max-[1380px]:hidden">
                Scroll that section!
              </p>
              <BigArrow className="w-[5rem] h-[5rem] rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
