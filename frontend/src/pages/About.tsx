import { Helmet } from "react-helmet-async";
import { Github, Linkedin, Mail } from "lucide-react";
import BackgroundAbyss from "../components/BackgroundAbyss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import { OG_IMAGE_URL, SITE_URL } from "../config/site";
import profilePhoto from "../assets/pfp.jpg";

const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "SQL",
  "Statistical Modeling",
  "Machine Learning",
  "Data Analysis",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Vite",
];

export default function About() {
  return (
    <main
      id="main-content"
      className="relative min-h-screen text-white bg-black"
    >
      <Helmet>
        <title>About · Ryan Tandean</title>
        <meta
          name="description"
          content="Learn more about Ryan Tandean — data science student, software developer, and builder."
        />
        <meta property="og:title" content="About · Ryan Tandean" />
        <meta
          property="og:description"
          content="Learn more about Ryan Tandean — data science student, software developer, and builder."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About · Ryan Tandean" />
        <meta
          name="twitter:description"
          content="Learn more about Ryan Tandean — data science student, software developer, and builder."
        />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <link rel="canonical" href={`${SITE_URL}/about`} />
      </Helmet>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundAbyss />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-24 pb-40">
        {/* Header */}
        <div className="mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#60a5fa]/70 mb-3">
            Me
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white [text-shadow:0_0_20px_rgba(96,165,250,0.35),0_0_55px_rgba(96,165,250,0.12)]">
            About
          </h1>
        </div>

        {/* Bio card */}
        <div className="rounded-3xl bg-white/2 backdrop-blur-xs border border-white/10 p-8 sm:p-10 mb-10">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <img
              src={profilePhoto}
              alt="Ryan Tandean"
              className="w-24 h-24 rounded-2xl border border-white/10 object-cover shrink-0"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-1">
                Ryan Tandean
              </h2>
              <p className="text-[#60a5fa] font-medium mb-4">
                Data Science @ University of Waterloo
              </p>
              <p className="text-white/60 leading-relaxed">
                I’m a data science student at the University of Waterloo with a focus on turning messy, real-world problems into working software and models
              </p>
              <p className="text-white/60 leading-relaxed mt-3">
                I've worked across research, product, and engineering roles, 
                cleaning and analyzing large datasets, building predictive and simulation-based models, 
                and developing user-facing software. 
                I care about work that's both technically sound and actually useful to people.
              </p>
              <p className="text-white/60 leading-relaxed mt-3">
                Outside of work, I’m usually at a piano, on a badminton court, or gaming. I also make time for a bit of photography, rock climbing, and running.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="rounded-3xl bg-white/2 backdrop-blur-xs border border-white/10 p-8 sm:p-10 mb-10">
          <h2 className="text-xl font-semibold text-white tracking-tight mb-6">
            Skills &amp; Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Tag key={s} name={s} />
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="rounded-3xl bg-white/2 backdrop-blur-xs border border-white/10 p-8 sm:p-10">
          <h2 className="text-xl font-semibold text-white tracking-tight mb-6">
            Links
          </h2>
          <div className="flex flex-col gap-4">
            <a
              href="https://github.com/RyanTandean"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
            >
              <Github
                size={20}
                className="text-white/30 group-hover:text-[#60a5fa] transition-colors"
              />
              <span>github.com/RyanTandean</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ryantandean/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
            >
              <Linkedin
                size={20}
                className="text-white/30 group-hover:text-[#60a5fa] transition-colors"
              />
              <span>linkedin.com/in/ryantandean</span>
            </a>
            <a
              href="mailto:ryan.tandean194@gmail.com"
              className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
            >
              <Mail
                size={20}
                className="text-white/30 group-hover:text-[#60a5fa] transition-colors"
              />
              <span>ryan.tandean194@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <Navbar />
      <Footer />
    </main>
  );
}
