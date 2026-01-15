import { Cards } from "./components/card";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Imags } from "./components/image";
import { Meet } from "./components/meet";
import { Navbar } from "./components/navbar";
import { Problem } from "./components/problem";

function App() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden">
        <div className="absolute top-0 z-[2] h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.2)_0,rgba(0,163,255,0)_100%,rgba(0,163,255,0)_100%)]">
        </div>
        <div className="absolute top-0 z-[2] h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.2)_0,rgba(0,163,255,0)_100%,rgba(0,163,255,0)_100%)]">
        </div>
        <div
        className=""
        >
          <Navbar />
          <Hero />
          <Imags />
          <Problem />
          <Cards />
          <Meet />
          <CTA />
          <Footer />
        </div>
        <div
        className="w-full h-screen bottom-0 absolute bg-[linear-gradient(180deg,rgba(9,9,121,0)_35%,rgba(0,212,255,0.2)_100%)]"
        ></div>
        <div
        className="w-full h-screen bottom-0 absolute bg-[linear-gradient(180deg,rgba(9,9,121,0)_35%,rgba(0,212,255,0.2)_100%)]"
        ></div>
      </div>
    </>
  );
}

export default App;
