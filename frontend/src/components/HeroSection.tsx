import ScrollDownArrow from "./ScrollDownArrow";
import KeyboardSection from "./sections/KeyboardSection";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center animate-fadein-slideup">
      <div className="w-full max-w-5xl px-6 flex flex-col items-start mx-auto">
        <h1 className="text-4xl md:text-6xl font-medium tracking-[0.12em] text-white [text-shadow:0_0_32px_rgba(56,189,248,0.85),0_0_8px_rgba(255,255,255,0.95)]">
          Hi, I'm Ryan.
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 font-light max-w-2xl">
          I am a Data Science student at the University of Waterloo.
        </p>
      </div>

      {/* Place keyboard full-width so it can align to the left edge of the page */}
      <div className="w-full mt-6">
        <KeyboardSection />
      </div>
      <div className="mt-40 w-full relative">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ScrollDownArrow />
        </div>
      </div>
    </section>
  );
}
