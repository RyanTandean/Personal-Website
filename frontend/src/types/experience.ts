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
}
