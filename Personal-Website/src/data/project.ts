import type { Project } from "../types/project";

export const myProjects: Project[] = [
  {
    id: 1,
    title: "SkipCost",
    description:
      "A tool for Waterloo students to calculate the cost of skipped lectures.",
    technologies: ["React", "TypeScript", "RegEx"],
    githubUrl: "https://github.com/RyanTandean/SkipCost",
  },
  {
    id: 2,
    title: "SYDE Research Assistant",
    description:
      "Analyzing systems design data for the University of Waterloo.",
    technologies: ["Python", "Data Analysis"],
    // Note: githubUrl is optional, so we can leave it out here!
  },
];
