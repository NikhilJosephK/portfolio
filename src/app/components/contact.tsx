"use client";
import SplashCursor from "@/reactbits/animations/SplashCursor/SplashCursor";
import Ballpit from "@/reactbits/backgrounds/Ballpit/Ballpit";
import { BigArrow } from "@/app/components/icons/big-arrow";

export function Contact() {
  return (
    <section className="h-screen overflow-hidden w-full pb-16  px-20 bg-white max-md:px-5">
      <div className="flex items-end gap-5 justify-between max-sm:flex-col-reverse">
        <p className="text-black text-[200px] font-extralight tracking-[-23px] relative top-24 max-[1350px]:text-[150px] max-[1350px]:top-12 max-[1350px]:trackin-[-5px] max-lg:text-6xl max-lg:top-0 max-lg:tracking-[-2px]">
          Contact Me.
        </p>
        <div className="flex flex-col items-end">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nikhil-joseph-k/"
            className="text-black text-xl font-extralight text-right hover:border-b-2 hover:border-black transition-all duration-50"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nikhiljosephk"
            className="text-black text-xl font-extralight text-right hover:border-b-2 hover:border-black transition-all duration-50"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:nikhilnjk@gmail.com"
            className="text-black text-xl font-extralight text-right hover:border-b-2 hover:border-black transition-all duration-50"
          >
            nikhilnjk@gmail.com
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+919746476718"
            className="text-black text-xl font-extralight text-right hover:border-b-2 hover:border-black transition-all duration-50"
          >
            9746476718
          </a>
          <BigArrow className="w-[5rem] h-[5rem] rotate-180 mt-10" />
        </div>
      </div>
      <div className="flex items-end">
        <SplashCursor TRANSPARENT={false} />
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "500px",
            maxHeight: "500px",
          }}
          className="mx-auto w-full border border-slate-200 rounded-3xl flex items-end bg-black"
        >
          <Ballpit
            count={100}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
            colors={["#FCC61D", "#BBDCE5", "#E4004B"]}
            ambientColor={0}
          />
        </div>
      </div>
    </section>
  );
}
  


