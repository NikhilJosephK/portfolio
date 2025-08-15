"use client";

import FlowingMenu from "@/reactbits/components/FlowingMenu/FlowingMenu";
import ProfileCard from "@/reactbits/components/ProfileCard/ProfileCard";

export function Contact() {
  const demoItems = [
    {
      link: "#",
      text: "LinkedIn",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Github",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Instagram",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Sequoia",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];
  return (
    <section className="h-screen grid place-items-center w-full">
      <div className="flex items-center justify-around gap-4 w-full">
        <div className="basis-1/2 flex justify-center">
          <ProfileCard
            name="Nikhil Joseph K"
            title="Frontend Developer"
            handle="nikhiljosephk"
            status="Online"
            contactText="Contact Me"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
            showBehindGradient={true}
            iconUrl="https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/iconpattern.png"
            grainUrl="https://ebwtwkumuwelcxqfrpag.supabase.co/storage/v1/object/public/images/grain.webp"
            avatarUrl="https://reactbits.dev/assets/person.png"
            className="w-fit"
          />
        </div>
        <div
          style={{ height: "90vh", position: "relative" }}
          className="w-full basis-1/2 flowing-menu"
        >
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </section>
  );
}
