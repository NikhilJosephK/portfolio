"use client";
import CardSwap, { Card } from "@/reactbits/components/CardSwap/CardSwap";
import { useRef, useEffect, useState } from "react";

export function Projects() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hello, setHello] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const percentage =
          (sectionRef.current.getBoundingClientRect().top /
            sectionRef.current.getBoundingClientRect().height) *
          100;
        const val = (percentage / -50) * 100;
        const hundred = Math.round(val) + 1;
        setHello(hundred);
      }
    };
    document
      .querySelector(".homepage")
      ?.addEventListener("scroll", handleScroll);
    return () =>
      document
        .querySelector(".homepage")
        ?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const offset = window.scrollY * 0.4; // 0.4 = slower speed
        videoRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="h-[2000px] relative"
      ref={sectionRef}
    >
      <div className="h-screen sticky top-0">
        <video
          src="https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/videos/number-one.mp4"
          autoPlay
          muted
          loop
          className={` ${
            hello >= 100 ? "rounded-none" : "rounded-2xl"
          } object-cover rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          style={{
            width: `100%`,
            height: `${hello > 0 && hello <= 100 ? hello : "100vh"}%`,
          }}
        />
        <div className="overflow-hidden max-w-6xl max-xl:max-w-5xl max-lg:rounded-none w-full mx-auto border bg-black border-white/50 rounded-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            style={{ height: "500px", position: "relative" }}
            className="flex items-center max-lg:flex-col"
          >
            <h1 className="text-2xl text-left font-semibold lg:pl-24 max-lg:pt-10 max-lg:w-full max-lg:pl-10 max-sm:text-xl flex flex-col gap-2">
              Here are some of the projects <br /> I&apos;ve worked on.
              <span className="text-slate-100 text-lg font-extralight mt-1">
                Feel free to check it out!
              </span>
            </h1>
            <div className="max-lg:w-full">
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
              >
                <Card>
                  <a
                    href="https://aajtraders.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-white text-base font-light border-b py-2 pl-4 bg-gradient-to-t from-blue-500/40 to-black rounded-t-2xl">
                      AAJ TRADERS
                    </h3>
                    <div className="w-full h-full m-4 bg-white rounded-2xl">
                      <video
                        src="https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/videos/number-one.mp4"
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </a>
                </Card>
                <Card>
                  <a
                    href="https://svetguide.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-white text-base font-light border-b py-2 pl-4 bg-gradient-to-t from-blue-500/40 to-black rounded-t-2xl">
                      SVETGUIDE
                    </h3>
                    <div className="w-full h-full m-4 bg-white rounded-2xl">
                      <video
                        src="https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/videos/number-two.mp4"
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </a>
                </Card>
                <Card>
                  <a
                    href="https://ai-notepad-eight.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-white text-base font-light border-b py-2 pl-4 bg-gradient-to-t from-blue-500/40 to-black rounded-t-2xl">
                      AI NOTEPAD
                    </h3>
                    <div className="w-full h-full m-4 bg-white rounded-2xl">
                      <video
                        src="https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/videos/number-3.mp4"
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </a>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
