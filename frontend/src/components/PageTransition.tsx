import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const Home = lazy(() => import("../pages/Home"));
const Projects = lazy(() => import("../pages/Projects"));
const Experiences = lazy(() => import("../pages/Experiences"));
const Contact = lazy(() => import("../pages/Contact"));
const About = lazy(() => import("../pages/About"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      {/* Skip-to-content link — visible only on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#06d4b3] focus:text-black focus:font-bold focus:outline-none"
      >
        Skip to content
      </a>
      {/* Skip-to-nav link — lets keyboard users jump to the navbar quickly */}
      <a
        href="#site-nav"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-40 focus:z-9999 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white/10 focus:text-white focus:font-bold focus:outline-none focus:border focus:border-white/20"
      >
        Skip to navigation
      </a>

      <ErrorBoundary>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experiences />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
