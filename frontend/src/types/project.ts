import type { TagName } from "../data/tagColors";

export interface ProjectSubsection {
  heading: string;
  body: string;
}

export interface ProjectSection {
  heading: string;
  body?: string;
  subsections?: ProjectSubsection[]; // optional nested items
}

export interface Project {
  id: number;
  title: string;
  year: string;
  description: {
    summary: string;
    sections: ProjectSection[];
  };
  technologies: TagName[];
  githubUrl?: string;
  liveUrl?: string; // For hosted web apps or demos
  isHackathon: boolean;
  hackathonName?: string; // e.g., "Waterloo Datafest" or "HackTheNorth"
  image: string; // Path to local asset or URL
  cardImage?: string; // Optional thumbnail image for project cards
  modalImage?: string; // Optional image for the project detail modal
  cardOverlayDarkness?: number; // Optional 0-1 black overlay opacity for card readability
  category: "Data Science" | "Software" | "AI/ML"; // Helps with filtering later
  featured: boolean; // For highlighting projects on the home page
}
