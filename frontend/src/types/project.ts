export interface Project {
    id: number;
    title: string;
    year: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;       // For hosted web apps or demos
    isHackathon: boolean;
    hackathonName?: string; // e.g., "Waterloo Datafest" or "HackTheNorth"
    image: string;          // Path to local asset or URL
    category: 'Data Science' | 'Software' | 'AI/ML'; // Helps with filtering later
    featured: boolean;      // For highlighting projects on the home page
}