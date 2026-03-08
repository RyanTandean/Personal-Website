import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-30 w-full border-t border-white/5 mt-20 pb-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Left: name + copyright */}
        <div className="text-center sm:text-left">
          <p className="text-white font-semibold tracking-tight">
            Ryan Tandean
          </p>
          <p className="text-white/30 text-sm mt-1">
            © {new Date().getFullYear()} · Built with React &amp; Tailwind
          </p>
        </div>

        {/* Centre: quick nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex gap-5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RyanTandean"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/30 hover:text-white transition-colors duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/194-ryan-tandean"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/30 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:ryan.tandean194@gmail.com"
            aria-label="Email Ryan"
            className="text-white/30 hover:text-white transition-colors duration-200"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
