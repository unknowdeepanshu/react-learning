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
      <div className="relative -z-10 flex min-h-screen flex-col items-center overflow-hidden bg-black text-white">
        <div className="absolute top-0 -z-[2] h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.2)_0,rgba(0,163,255,0)_100%,rgba(0,163,255,0)_100%)]"></div>
        <div className="absolute top-0 -z-[2] h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.2)_0,rgba(0,163,255,0)_100%,rgba(0,163,255,0)_100%)]"></div>
        <div className="">
          <nav className="absolute inset-x-0 top-0 z-10">
            <Navbar />
          </nav>

          <section className="mx-auto max-w-7xl p-6 py-16 md:py-24 lg:px-8">
            <Hero />
            <Imags />
            <Problem />
            <Cards />
            <Meet />
            <CTA />
          </section>
          <div className="relative w-full">
            <div className="absolute inset-x-0 bottom-0 -z-[1] h-[90rem] bg-[linear-gradient(180deg,rgba(9,9,121,0)_35%,rgba(0,212,255,0.1)_100%)]"></div>
            <footer className="relative mx-auto max-w-7xl p-6 pt-16 pb-12 lg:px-8">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
