import { useLayoutEffect, useState, useRef, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Briefcase, BookOpen } from "lucide-react";
import { NavItem } from "./NavItem"; // Assuming it's in the same folder

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Projects", path: "/projects", icon: BookOpen },
  { label: "Experience", path: "/experience", icon: Briefcase },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const activeIndex = useMemo(() => {
    const idx = navItems.findIndex((item) => item.path === location.pathname);
    return idx === -1 ? 0 : idx;
  }, [location.pathname]);

  const [selectorStyle, setSelectorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    const updatePill = () => {
      const activeItem = containerRefs.current[activeIndex];
      if (activeItem) {
        setSelectorStyle({
          left: activeItem.offsetLeft,
          width: activeItem.offsetWidth,
          opacity: 1,
        });
      }
    };

    updatePill();
    // Re-calculate if the window resizes
    const timer = setTimeout(() => setIsLoaded(true), 50);
    window.addEventListener("resize", updatePill);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updatePill);
    };
  }, [activeIndex]);

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-1001 antialiased">
      {/* Container: We keep px-1.5 constant to avoid math shifts */}
      <div className="relative flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-2xl p-1.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 will-change-transform">
        
        <div
          className="absolute top-1.5 bottom-1.5 rounded-full bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[left,width]"
          style={{
            left: selectorStyle.left,
            width: selectorStyle.width,
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
        
        {navItems.map((item, idx) => (
          <NavItem
            key={item.label}
            {...item}
            isActive={activeIndex === idx}
            onClick={() => navigate(item.path)}
            setRef={(el) => { containerRefs.current[idx] = el; }}
          />
        ))}
      </div>
    </nav>
  );
}