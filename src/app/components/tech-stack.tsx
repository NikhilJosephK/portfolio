"use client";

import { BigArrow } from "./icons/big-arrow";

export function TechStack() {
  return (
    <section>
      <div className="flex flex-col h-screen justify-start">
        <div className="flex justify-center items-center bg-black rounded-[15px] overflow-auto h-20">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`${
                index === 1 ? "basis-[800px] shrink-0" : "basis-full"
              } border-[0.5px] border-black h-full w-full bg-white`}
            />
          ))}
        </div>
        <div className="flex justify-center items-stretch bg-black  overflow-auto h-full">
          <div className="basis-full  border-[0.5px] border-black w-full bg-white h-full rounded-[20px]">
            <p className="text-black font-light text-sm p-5">
              Back in 2022, I started my journey with just HTML, CSS and
              JAVASCRIPT. I have come a long way since then, picked up some
              other stacks on the way and my pocket is still not full!
            </p>
          </div>
          <div className="basis-[800px] shrink-0  border-[0.5px] border-black w-full bg-white h-full rounded-[20px]"></div>
          <div className="basis-full border-[0.5px] border-black w-full bg-white h-full rounded-[20px] flex items-end justify-end">
            <div className="flex items-end gap-4 justify-end pr-5 pb-5">
              <p className="text-black font-light text-base leading-tight">
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
