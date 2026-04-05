import quickPng from "../assets/quick.png";
import type { Project } from "../types/project";

export const myProjects: Project[] = [
  {
    id: 1,
    title: "MoodNest",
    year: "2026",
    description:
      "An AI-powered home environment demo that listens to your voice, detects emotion, and adapts lighting, color, and music in real time.",
    technologies: ["React", "JavaScript", "Node.js", "Python", "AI"],
    githubUrl: "https://github.com/RyanTandeanUW/MoodNest.git",
    isHackathon: true,
    hackathonName: "CXC 2026 - AI Hackathon",
    image: quickPng,
    category: "Software",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Website",
    year: "2026",
    description:
      "My personal portfolio website for showcasing projects, experience, and contact information.",
    technologies: ["React", "TypeScript", "CSS"],
    isHackathon: false,
    image: quickPng,
    category: "Software",
    featured: true,
  },
];
