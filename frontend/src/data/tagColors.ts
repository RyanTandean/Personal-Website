export const tagMeta = {
  React: {
    classes: "bg-[#61dafb]/10 border-[#61dafb]/20 text-[#61dafb]",
    icon: "⚛️",
  },
  TypeScript: {
    classes: "bg-[#3178c6]/10 border-[#3178c6]/20 text-[#3178c6]",
    icon: "🔷",
  },
  "Node.js": {
    classes: "bg-[#3C873A]/10 border-[#3C873A]/20 text-[#3C873A]",
    icon: "⬢",
  },
  JavaScript: {
    classes: "bg-amber-400/10 border-amber-400/20 text-amber-400",
    icon: "🟨",
  },
  Python: {
    classes: "bg-[#3776AB]/10 border-[#3776AB]/20 text-[#3776AB]",
    icon: "🐍",
  },
  Flask: {
    classes: "bg-gray-500/10 border-gray-500/20 text-gray-300",
    icon: "🧪",
  },
  HTML: {
    classes: "bg-[#e34f26]/10 border-[#e34f26]/20 text-[#e34f26]",
    icon: "📄",
  },
  CSS: {
    classes: "bg-[#264de4]/10 border-[#264de4]/20 text-[#264de4]",
    icon: "🎨",
  },
  Vue: {
    classes: "bg-[#41b883]/10 border-[#41b883]/20 text-[#41b883]",
    icon: "🟩",
  },
  "Vue.js": {
    classes: "bg-[#41b883]/10 border-[#41b883]/20 text-[#41b883]",
    icon: "🟩",
  },
  SEO: {
    classes: "bg-yellow-600/10 border-yellow-600/20 text-yellow-600",
    icon: "🔎",
  },
  "Data Analysis": {
    classes: "bg-[#150458]/10 border-[#150458]/20 text-[#5e2ae8]",
    icon: "📊",
  },
  RegEx: {
    classes: "bg-[#8b5cf6]/10 border-[#8b5cf6]/20 text-[#8b5cf6]",
    icon: "🔎",
  },
  Pandas: {
    classes: "bg-[#150458]/10 border-[#150458]/20 text-[#5e2ae8]",
    icon: "📊",
  },
  Matplotlib: {
    classes: "bg-[#11557c]/10 border-[#11557c]/20 text-[#4dd0e1]",
    icon: "📈",
  },
};

export type TagName = keyof typeof tagMeta;
