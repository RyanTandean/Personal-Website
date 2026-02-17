import type { Experience } from "../types/experience";

export const myExperiences: Experience[] = [
  {
    id: 1,
    company: "Tech Startup Inc.",
    title: "Software Engineer Intern",
    start: "May 2025",
    end: "Aug 2025",
    description:
      "Worked on building scalable web applications and contributed to the core product features.",
    technologies: ["React", "TypeScript", "Node.js"],
    location: "Toronto, ON",
    featured: true,
  },
  {
    id: 2,
    company: "University of Waterloo",
    title: "Research Assistant",
    start: "Jan 2024",
    end: "Apr 2024",
    description:
      "Assisted in data analysis and visualization for a systems design research project.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    location: "Waterloo, ON",
    featured: false,
  },
  {
    id: 3,
    company: "Freelance",
    title: "Web Developer",
    start: "Sep 2023",
    end: "Dec 2023",
    description:
      "Designed and developed responsive websites for small businesses, focusing on user experience and SEO.",
    technologies: ["HTML", "CSS", "JavaScript", "SEO"],
    location: "Remote",
    featured: false,
  },
];
