"use client";

import CardSwap, { Card } from "@/reactbits/components/CardSwap/CardSwap";

export default function TechStack() {
  return (
    <section className="h-screen grid place-items-center">
      <div className="overflow-hidden max-w-6xl w-full mx-auto border border-white/50 rounded-4xl">
        <div
          style={{ height: "500px", position: "relative" }}
          className="flex items-center"
        >
          <h1 className="text-2xl text-left font-semibold pl-24 flex flex-col gap-2">
            Here are some of the projects <br /> I&apos;ve worked on.
            <span className="text-slate-100 text-lg font-extralight mt-1">
              Feel free to check it out!
            </span>
          </h1>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <h3 className="text-white text-base font-light border-b py-2 pl-4 bg-gradient-to-t from-blue-500/40 to-black rounded-t-2xl">
                Card 1
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
            </Card>
            <Card>
              <h3 className="text-white text-base font-light border-b py-2 pl-4 bg-gradient-to-t from-blue-500/40 to-black rounded-t-2xl">
                Card 2
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
            </Card>
            <Card>
              <h3 className="text-white text-base font-light border-b py-2 pl-4 bg-gradient-to-t from-blue-500/40 to-black rounded-t-2xl">
                Card 3
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
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
