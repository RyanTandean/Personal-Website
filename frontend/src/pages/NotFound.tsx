import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BackgroundAbyss from "../components/BackgroundAbyss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="relative min-h-screen text-white bg-black flex flex-col items-center justify-center"
    >
      <Helmet>
        <title>404 · Ryan Tandean</title>
        <meta name="description" content="Page not found." />
      </Helmet>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundAbyss />
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#06d4b3]/70 mb-4">
          404
        </p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white [text-shadow:0_0_20px_rgba(6,212,179,0.35),0_0_55px_rgba(6,212,179,0.12)] mb-6">
          Lost?
        </h1>
        <p className="text-white/40 text-lg font-light mb-10 max-w-sm mx-auto">
          This page doesn't exist. Head back and explore something that does.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl bg-[#06d4b3] text-black font-bold tracking-tight hover:bg-[#06d4b3]/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06d4b3] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Back to Home
        </Link>
      </div>

      <Navbar />
      <Footer />
    </main>
  );
}
