import { Hero, TechStack } from "./components";

export default function Home() {
  return (
    <div className="bg-black text-white relative">
      <Hero />
      <TechStack />
    </div>
  );
}
