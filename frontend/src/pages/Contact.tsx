import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import BackgroundAbyss from "../components/BackgroundAbyss";
import Navbar from "../components/Navbar";
import GradualBlur from "../components/GradualBlur";
import Footer from "../components/Footer";

const SITE_URL = "https://ryantandean.dev";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

const inputClass =
  "mt-1 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-2.5 text-white placeholder-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06d4b3] transition-colors duration-200 hover:border-white/20";

const labelClass =
  "block text-sm font-semibold tracking-wide text-white/60 uppercase mb-1";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const statusRef = useRef<HTMLDivElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => statusRef.current?.focus(), 100);
  }

  return (
    <main
      id="main-content"
      className="relative min-h-screen text-white bg-black"
    >
      <Helmet>
        <title>Contact · Ryan Tandean</title>
        <meta
          name="description"
          content="Get in touch with Ryan Tandean — open to opportunities, collaborations, and coffee chats."
        />
        <meta property="og:title" content="Contact · Ryan Tandean" />
        <meta
          property="og:description"
          content="Get in touch with Ryan Tandean."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact · Ryan Tandean" />
        <meta
          name="twitter:description"
          content="Get in touch with Ryan Tandean — open to opportunities, collaborations, and coffee chats."
        />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
      </Helmet>
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundAbyss />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-24 pb-40">
        {/* Page header */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#06d4b3]/70 mb-3">
            Reach out
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white [text-shadow:0_0_20px_rgba(6,212,179,0.35),0_0_55px_rgba(6,212,179,0.12)]">
            Contact
          </h1>
          <p className="mt-3 text-white/40 text-lg font-light">
            Get in touch with me here at{" "}
            <a
              href="mailto:ryan.tandean194@gmail.com"
              className="text-[#06d4b3] hover:text-[#06d4b3]/80 transition-colors underline underline-offset-4"
            >
              ryan.tandean194@gmail.com
            </a>
          </p>
        </div>

        {/* Form card — matched to ExperienceCard glass style */}
        <div className="antialiased relative isolate rounded-3xl bg-white/1.5 backdrop-blur-xs border border-[#06d4b3]/30 overflow-hidden shadow-[0_0_40px_-10px_rgba(6,212,179,0.18)]">
          <div className="relative z-10 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">
              Send a message
            </h2>

            {status === "success" ? (
              <div
                ref={statusRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                className="py-12 text-center"
              >
                <p className="text-3xl font-bold text-[#06d4b3] mb-2">
                  Message sent!
                </p>
                <p className="text-white/50">
                  I'll get back to you within a few business days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-white/40 hover:text-white transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => void handleSubmit(e)}
                className="space-y-6"
                noValidate
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Ryan Tandean"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Hi Ryan, I'd love to chat about..."
                    className={inputClass + " resize-none"}
                  />
                </div>

                {status === "error" && (
                  <div
                    ref={statusRef}
                    role="alert"
                    aria-live="assertive"
                    tabIndex={-1}
                    className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
                  >
                    {!FORMSPREE_ID
                      ? "Contact form not configured. Please email me directly at "
                      : "Something went wrong. Please try emailing me directly at "}
                    <a
                      href="mailto:ryan.tandean194@gmail.com"
                      className="underline text-red-300"
                    >
                      ryan.tandean194@gmail.com
                    </a>
                    .
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting" || !FORMSPREE_ID}
                    title={
                      !FORMSPREE_ID
                        ? "Contact form not configured (missing VITE_FORMSPREE_ID)"
                        : ""
                    }
                    className="px-6 py-2.5 rounded-xl bg-[#06d4b3] text-black font-bold tracking-tight transition-all duration-200 hover:bg-[#06d4b3]/80 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06d4b3] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {status === "submitting"
                      ? "Sending…"
                      : !FORMSPREE_ID
                        ? "Form not configured"
                        : "Send message"}
                  </button>
                  <a
                    href="mailto:ryan.tandean194@gmail.com"
                    className="text-sm text-white/30 hover:text-white transition-colors"
                  >
                    Or email me directly →
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        <p className="mt-6 text-xs text-white/20 text-center">
          I typically respond within a few business days. Your message is not
          shared with third parties.
        </p>
      </div>

      <GradualBlur
        target="page"
        position="bottom"
        height="7rem"
        curve="bezier"
        exponential
        opacity={1}
        strength={2}
        divCount={5}
        zIndex={40}
      />

      <Navbar />
      <Footer />
    </main>
  );
}
