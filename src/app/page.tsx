import { Hero, Projects, Contact } from "./components";

export default function Home() {
  return (
    <div className="bg-black text-white relative">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
