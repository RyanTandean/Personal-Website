import type { TagName } from "../data/tagColors";

export interface Experience {
  id: number;
  company: string;
  title: string;
  start: string; // e.g. 'May 2025'
  end: string; // e.g. 'Aug 2025' or 'Present'
  description: string;
  technologies: TagName[];
  location?: string;
  featured?: boolean;
  // Optional path to a company logo (imported asset or URL)
  logo?: string;
  // Optional alt text for the logo for accessibility
  logoAlt?: string;
}
