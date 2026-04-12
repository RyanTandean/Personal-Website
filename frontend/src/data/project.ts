import moodnestModalPng from "../assets/moodnest_modal.png";
import heroCardPng from "../assets/hero_card.png";
import heroModalPng from "../assets/hero_modal.png";
import type { Project } from "../types/project";

const paragraph = (...lines: string[]) => lines.join(" ");

export const myProjects: Project[] = [
  {
    id: 1,
    title: "MoodNest",
    year: "2026",
    description: {
      summary: paragraph(
        "An AI-powered home environment demo that listens to your voice,",
        "analyzes emotional tone, and adapts the home environment to match your mood.",
      ),
      sections: [
        {
          heading: "Inspiration",
          body: paragraph(
            "What if your home could sense how you're feeling? We started with this question.",
            "Instead of just responding to voice commands, we imagined a space that",
            "actually understands your emotional state and adapts to support you like",
            "a thoughtful friend. With AI becoming more emotionally intelligent and",
            "multimodal, it felt like the right time to explore how technology could",
            "make homes feel more human and adaptive.",
          ),
        },
        {
          heading: "How It Works",
          body: paragraph(
            "You speak into the browser, and the system gets to work.",
            "Your audio goes to a FastAPI backend where Google's Gemini 2.5",
            "Flash-Lite analyzes your sentiment and emotional tone.",
            "It classifies your mood into four categories (Happy, Sad, Angry, Neutral)",
            "and converts those emotional scores into specific lighting and music",
            "parameters. Meanwhile, React Three Fiber renders a 3D apartment where",
            "the lighting smoothly transitions in real-time based on your detected mood.",
            "An ElevenLabs voice adds a personal touch with empathetic responses to",
            "complete the experience.",
          ),
        },
        {
          heading: "Technical Highlights",
          body: paragraph(
            "On the frontend, we built a React app powered by React Three Fiber",
            "and Three.js to handle complex 3D rendering with proper material",
            "lighting and shadows. Audio recording flows smoothly into the browser,",
            "with state transitions animated through interpolation.",
            "The backend serves REST endpoints that handle audio preprocessing,",
            "AI analysis, and environment state mapping. We successfully wove together",
            "FastAPI, Google Gemini, ElevenLabs, and Three.js into a working demo.",
            "All of this came together during a hackathon with tight time constraints.",
          ),
        },
        {
          heading: "Key Challenges",
          body: paragraph(
            "Getting emotion classification right from just a few seconds of audio",
            "was tricky. Mapping abstract feelings to concrete lighting parameters",
            "required real iteration. Three.js gave us some debugging headaches",
            "with materials and shadows. Syncing real-time updates between the backend",
            "and 3D frontend while keeping everything responsive was another layer",
            "of complexity. Plus, we had to make tough calls about scope.",
            "We originally wanted to include computer vision and IoT device integration,",
            "but we scaled back to focus on creating something that felt genuinely",
            "empathetic rather than gimmicky.",
          ),
        },
      ],
    },
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Python",
      "Flask",
    ],
    isHackathon: true,
    hackathonName: "CXC 2026 - AI Hackathon",
    image: moodnestModalPng,
    category: "Software",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Website",
    year: "2026",
    description: {
      summary: paragraph(
        "A space for others to explore my experience and learn a bit about me.",
        "This site showcases my projects, experiments, work experience, and the thinking behind my work.",
      ),
      sections: [
        {
          heading: "Design",
          body: paragraph(
            "Visually, I wanted something that felt both minimal and striking.",
            "The design draws inspiration from the deep ocean with a dark theme,",
            "smooth page transitions, and interactive 3D elements like floating",
            "keyboard keys and animated particles. Every visual detail exists",
            "to create an engaging experience that matches how I approach my work.",
          ),
        },
        {
          heading: "Engineering",
          body: paragraph(
            "Built with React, TypeScript, and Vite to prioritize performance.",
            "The site is fully responsive with type-safe routing through React Router.",
            "SEO is baked in with dynamic meta tags, OG images, and structured sitemaps.",
            "Accessibility is just as important to me as the visual design,",
            "so the entire site is WCAG compliant with proper keyboard navigation,",
            "ARIA labels, and semantic HTML.",
          ),
        },
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "SEO",
      "HTML",
      "CSS",
    ],
    isHackathon: false,
    image: heroModalPng,
    cardImage: heroCardPng,
    modalImage: heroModalPng,
    cardOverlayDarkness: 0.78,
    category: "Software",
    featured: true,
  },
];
