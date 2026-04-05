import type { Experience } from "../types/experience";
import kumonLogo from "../assets/kumon_canada_logo.jpg";
import uwaterlooLogo from "../assets/uwaterloo_logo.jpg";
import electriumLogo from "../assets/electrium_mobility_logo.jpg";

export const myExperiences: Experience[] = [
  {
    id: 1,
    company: "University of Waterloo, Department of Systems Design Engineering",
    title: "Research Assistant, Transportation Systems",
    start: "Jan 2026",
    end: "Apr 2026",
    description:
      "Analyzed EV charging behavior using survey data, discrete choice modeling, and high-performance simulation.",
    points: [
      "Processed and validated a 700+ respondent EV charging survey dataset, resolving data quality issues and standardizing variables across subsets for statistical modeling.",
      "Investigated key drivers of EV charging behavior through statistical analysis to validate and refine model assumptions.",
      "Developed and validated discrete choice models to predict EV driver charging decisions, quantifying the effects of price, charger power, and trip characteristics on charging likelihood.",
      "Optimized a single-day EV charging simulation from approximately 25 minutes to under 1 minute, then extended it into a multi-day convergence loop while maintaining sub-minute performance.",
    ],
    technologies: ["Python", "Pandas", "Statistical Modeling", "Simulation"],
    location: "Waterloo, ON",
    featured: true,
    logo: uwaterlooLogo,
    logoAlt: "University of Waterloo logo",
  },
  {
    id: 2,
    company: "WE Accelerate: Microsoft Azure & AI Stream",
    title: "Relief Buddy Project Team Member",
    start: "May 2025",
    end: "Aug 2025",
    description:
      "Contributed to client-facing industry research and solution design using Azure and AI fundamentals.",
    points: [
      "Identified and analyzed key industry challenges to develop actionable client recommendations, delivering a comprehensive final report to the project client.",
      "Applied Microsoft AZ-900 and AI-900 cloud and AI concepts to propose technical solutions that shaped the final client report.",
      "Led a virtual team presentation of key research findings using PowerPoint, supporting a successful final demonstration.",
    ],
    technologies: ["Azure", "AI", "Data Analysis"],
    location: "Remote",
    featured: true,
    logo: uwaterlooLogo,
    logoAlt: "University of Waterloo logo",
  },
  {
    id: 3,
    company: "Electrium Mobility",
    title: "Firmware Team Member",
    start: "Sep 2024",
    end: "Apr 2025",
    description:
      "Built embedded UI and hardware prototypes for a bike computer while improving firmware team collaboration workflows.",
    points: [
      "Developed a user interface in C with LVGL for a bike computer, implementing button-based screen interactions in the ESP-IDF framework.",
      "Designed, assembled, and troubleshot hardware prototypes using microcontrollers, wiring, and breadboards for rapid prototyping.",
      "Improved team development workflow by introducing GitHub-based version control, enabling more efficient collaboration, code management, and documentation.",
    ],
    technologies: ["C", "ESP-IDF", "Embedded Systems", "Git"],
    location: "Waterloo, ON",
    featured: true,
    logo: electriumLogo,
    logoAlt: "Electrium Mobility logo",
  },
  {
    id: 4,
    company: "Kumon Canada, Inc.",
    title: "Marking Assistant",
    start: "Dec 2020",
    end: "Jun 2024",
    description:
      "Supported student learning through individualized guidance and data-informed feedback to senior staff.",
    points: [
      "Mentored students by balancing guidance with independent work, promoting problem-solving and independent learning.",
      "Tracked and analyzed student performance data to identify learning challenges and communicated findings to senior staff for student improvement.",
    ],
    technologies: ["Data Analysis"],
    location: "Markham, ON",
    featured: false,
    logo: kumonLogo,
    logoAlt: "Kumon Canada logo",
  },
];
