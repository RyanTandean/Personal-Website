import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Keycap from "../Keycap";

export default function KeyboardSection() {
  return (
    <section className="w-full py-6 overflow-visible">
      {/* Center the key cluster inside the same max-width container as the hero text */}
      <div className="w-full max-w-5xl px-6 mx-auto">
        {/* FIX 1: Shared Perspective 
        By putting perspective: 1200px here, all keys share one vanishing point, 
        which reduces individual texture distortion.
      */}
        <div
          className="flex gap-2 md:gap-6 items-center"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Github */}
          <div
            className="animate-[float_6s_infinite_ease-in-out]"
            style={{ animationDelay: "0s" }}
          >
            <Keycap
              ariaLabel="Open GitHub (opens in new tab)"
              link="https://github.com/RyanTandean"
              rotation={14}
              yOffset={-4}
              xOffset={0}
            >
              <Github size={24} strokeWidth={2} />
            </Keycap>
          </div>

          {/* LinkedIn */}
          <div
            className="animate-[float_6s_infinite_ease-in-out]"
            style={{ animationDelay: "1.6s" }}
          >
            <Keycap
              ariaLabel="Open LinkedIn (opens in new tab)"
              link="https://www.linkedin.com/in/194-ryan-tandean"
              rotation={6}
              yOffset={23}
              xOffset={0}
            >
              <Linkedin size={24} strokeWidth={2} />
            </Keycap>
          </div>

          {/* Mail */}
          <div
            className="animate-[float_6s_infinite_ease-in-out]"
            style={{ animationDelay: "1.8s" }}
          >
            <Keycap
              ariaLabel="Send email"
              link="mailto:ryan.tandean194@gmail.com"
              rotation={-2}
              yOffset={0}
              xOffset={0}
            >
              <Mail size={24} strokeWidth={2} />
            </Keycap>
          </div>

          {/* Resume - Added as the 4th "dropped" key */}
          <div
            className="animate-[float_6s_infinite_ease-in-out]"
            style={{ animationDelay: "0.8s" }}
          >
            <Keycap
              ariaLabel="Open resume (PDF)"
              link="/resume.pdf"
              rotation={-17}
              yOffset={36}
              xOffset={8}
            >
              <FileText size={24} strokeWidth={2} />
            </Keycap>
          </div>
        </div>
      </div>
    </section>
  );
}
