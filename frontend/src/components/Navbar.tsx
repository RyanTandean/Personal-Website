import { useLayoutEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
];

export default function Navbar() {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectorStyle, setSelectorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    transition: "left 120ms cubic-bezier(.4,0,.2,1)",
  });

  useLayoutEffect(() => {
    const idx = navItems.findIndex((item) => item.path === location.pathname);
    if (idx !== -1 && idx !== selected) setSelected(idx);
    // eslint-disable-next-line
  }, [location.pathname]);

  useLayoutEffect(() => {
    const activeBtn = btnRefs.current[selected];
    if (activeBtn) {
      setSelectorStyle((style) => ({
        ...style,
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
        opacity: 1,
      }));
    }
  }, [selected]);

  return (
    <nav className="fixed top-8 right-10 z-20">
      <div className="relative flex items-center bg-black/60 border border-white/10 backdrop-blur-md p-1 rounded-full shadow-md">
        <div
          className="absolute h-[calc(100%-8px)] bg-white/10 rounded-full transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] will-change-[left,width]"
          style={{
            left: selectorStyle.left,
            width: selectorStyle.width,
            opacity: selectorStyle.opacity,
          }}
        />
        {navItems.map((item, idx) => (
          <button
            key={item.label}
            ref={(el) => {
              btnRefs.current[idx] = el;
            }}
            onClick={() => {
              setSelected(idx);
              navigate(item.path);
            }}
            className={`relative z-10 px-6 py-2 text-lg font-semibold transition-opacity duration-200 ${
              selected === idx ? "opacity-100" : "opacity-40 hover:opacity-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
