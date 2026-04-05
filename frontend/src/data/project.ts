import moodnestModalPng from "../assets/moodnest_modal.png";
import heroCardPng from "../assets/hero_card.png";
import heroModalPng from "../assets/hero_modal.png";
import type { Project } from "../types/project";

export const myProjects: Project[] = [
  {
    id: 1,
    title: "MoodNest",
    year: "2026",
    description:
      "An AI-powered home environment demo that listens to your voice, detects emotion, and adapts lighting, color, and music in real time.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Python",
      "AI",
    ],
    githubUrl: "https://github.com/RyanTandeanUW/MoodNest.git",
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
    description:
      "My personal portfolio website for showcasing projects, experience, and contact information.",
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
    cardOverlayDarkness: 0.58,
    category: "Software",
    featured: true,
  },
];
