import moodnestModalPng from "../assets/moodnest_modal.png";
import heroCardPng from "../assets/hero_card.png";
import heroModalPng from "../assets/hero_modal.png";
import type { Project } from "../types/project";

const paragraph = (...lines: string[]) => lines.join(" ");
const paragraphs = (...paras: string[]) => paras.join("\n\n");

export const myProjects: Project[] = [
  {
    id: 1,
    title: "MoodNest",
    year: "2026",
    description: {
      summary: paragraph(
        "A voice-driven demo that detects your emotional tone and adapts a simulated home environment in response, adjusting lighting and music in a 3D apartment based on how you're feeling.",
      ),
      sections: [
        {
          heading: "Inspiration",
          body: paragraph(
            "Smart home assistants like Google Home and Alexa are good at executing commands, but they're purely reactive.",
            "They do what you tell them.",
            "With AI becoming more emotionally intelligent and multimodal, it felt worth exploring what a home environment might look like if it could pick up on how you're actually feeling and respond to that, rather than waiting to be told what to do.",
          ),
        },
        {
          heading: "How It Works",
          body: paragraphs(
            "You speak into the browser; a FastAPI backend sends your audio to Google's Gemini 2.5 Flash-Lite, which classifies your mood into one of four categories (happy, sad, angry, neutral) and maps that to lighting and music parameters. ",
            "On the frontend, React Three Fiber renders a 3D apartment where lighting transitions smoothly in real time.",
            "ElevenLabs generates empathetic voice responses to complete the interaction.",
            "Getting emotion classification to feel accurate from just a few seconds of audio required a fair bit of iteration, as did mapping abstract emotional scores to concrete lighting values in a way that felt natural rather than arbitrary.",
          ),
        },
        {
          heading: "Note on the codebase",
          body: paragraph(
            "This was a hackathon project built under tight time constraints, so the implementation was rough around the edges and isn't something I'd consider production-ready.",
            "A demo video from our submission is linked in the sidebar if you're curious.",
            "The core idea is something I'd like to revisit with a cleaner architecture.",
          ),
        },
      ],
    },
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Python",
      "Gemini",
      "ElevenLabs",
      "FastAPI",
      "Three.js",
    ],
    isHackathon: true,
    hackathonName: "CXC 2026 - AI Hackathon",
    devpostUrl: "https://devpost.com/software/moodnest-c8deml",
    image: moodnestModalPng,
    category: "Software",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Website",
    year: "2026",
    description: {
      summary: `A space for others to learn a little bit about me. This site showcases my projects, experiments, work experience, and the thinking behind my work.`,
      sections: [
        {
          heading: "Design",
          body: paragraphs(
            "Visually, I wanted a look that is minimal but still has character. The design uses a dark theme, floating particles, and soft blue ambient light to create an atmosphere that feels intentional without being overdone.",
            "I wanted the space to feel fluid, so details are kept subtle enough to ensure the experience stays fast and responsive.",
            "If you have ever played Hollow Knight, the Lifeblood menu was the main inspiration for the aesthetic.",
          ),
        },
        {
          heading: "Architecture",
          body: paragraphs(
            "This site is structured as a component-driven React and TypeScript app built with Vite. Pages are built from reusable sections and shared components, so the design stays consistent while the content stays easy to update.",
            "Navigation and modal flows are state-driven and route-aware, including URL-based project modal state for direct linking and proper browser history behavior.",
            "The visual system is layered intentionally: an atmospheric background engine, motion-tuned card interactions, and deterministic particle effects balanced for performance.",
            "Reliability was treated as a first-class concern throughout, with typed data models, error boundaries, SEO metadata, and accessibility foundations including semantic structure, keyboard support, and ARIA labeling.",
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
