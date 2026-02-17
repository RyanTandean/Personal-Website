import quickPng from "../assets/quick.png";
import type { Project } from "../types/project";

export const myProjects: Project[] = [
  {
    id: 1,
    title: "SkipCost",
    year: "2025",
    description:
      "A tool for Waterloo students to calculate the cost of skipped lectures.",
    technologies: ["React", "TypeScript", "RegEx"],
    githubUrl: "https://github.com/RyanTandean/SkipCost",
    isHackathon: false,
    image: quickPng,
    category: "Software",
    featured: true,
  },
  {
    id: 2,
    title: "SYDE Research Assistant",
    year: "2024",
    description:
      "Analyzing systems design data for the University of Waterloo.",
    technologies: ["Python", "Data Analysis"],
    isHackathon: false,
    image: quickPng,
    category: "Data Science",
    featured: true,
  },
  {
    id: 3,
    title: "Dummy Project Alpha",
    year: "2026",
    description:
      "A fake project for demonstration purposes. Showcases UI and API integration.",
    technologies: ["Vue.js", "Node.js"],
    isHackathon: false,
    image: quickPng,
    category: "Software",
    featured: true,
  },
  {
    id: 4,
    title: "Dummy Project Beta",
    year: "2026",
    description:
      "Another fake project to fill out the project list. Includes testing and deployment.",
    technologies: ["Python", "Flask"],
    isHackathon: false,
    image: "", // Add image path or URL
    category: "AI/ML",
    featured: false,
  },
];
