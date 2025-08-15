import { Hero, TechStack, Contact } from "./components";

export default function Home() {
  return (
    <div className="bg-black text-white relative">
      <Hero />
      <TechStack />
      <Contact />
    </div>
  );
}
