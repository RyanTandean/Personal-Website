import MotesLayer from "./MotesLayer";
import { memo } from "react";
import useScrollParallax from "../hooks/useScrollParallax";

const BackgroundAbyss = memo(function BackgroundAbyss() {
  const scroll = useScrollParallax();

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none bg-black overflow-hidden"
      style={{ transform: "translateZ(0)" }}
      aria-hidden="true"
    >
      {/* ATMOSPHERIC WRAPPER: This handles the smoothing and now participates in scroll */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          filter: `brightness(calc(0.7 * var(--scene-exposure, 1))) blur(0px)`,
          opacity: 1,
        }}
      >
        {/* 1. BASE GRADIENT OVERLAY — deep-sea bioluminescent atmosphere */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(var(--beam-core-rgb, 118, 168, 242), var(--beam-core-alpha, 0.042)) 0%, rgba(var(--beam-core-rgb, 118, 168, 242), 0) 44%), \
               radial-gradient(ellipse at 50% 14%, rgba(var(--beam-mid-rgb, 88, 136, 224), var(--beam-mid-alpha, 0.025)) 0%, rgba(var(--beam-mid-rgb, 88, 136, 224), 0) 40%), \
               radial-gradient(ellipse at 50% 30%, rgba(var(--beam-tail-rgb, 70, 114, 204), var(--beam-tail-alpha, 0.014)) 0%, rgba(var(--beam-tail-rgb, 70, 114, 204), 0) 52%), \
               radial-gradient(circle at 0% 0%, rgba(0, 0, 0, var(--vignette-top-left-alpha, 0.48)) 0%, rgba(0, 0, 0, 0) 44%), \
               radial-gradient(circle at 100% 0%, rgba(0, 0, 0, var(--vignette-top-right-alpha, 0.46)) 0%, rgba(0, 0, 0, 0) 44%), \
               radial-gradient(circle at 0% 100%, rgba(0, 0, 0, var(--vignette-bottom-left-alpha, 0.54)) 0%, rgba(0, 0, 0, 0) 48%), \
               radial-gradient(circle at 100% 100%, rgba(0, 0, 0, var(--vignette-bottom-right-alpha, 0.52)) 0%, rgba(0, 0, 0, 0) 48%), \
               linear-gradient(to bottom, var(--scene-base-0, #05112b) 0%, var(--scene-base-1, #040d22) 22%, var(--scene-base-2, #020819) 46%, var(--scene-base-3, #010511) 68%, var(--scene-base-4, #00030a) 84%, var(--scene-base-5, #000102) 100%)",
          }}
        />

        {/* 2. MOTES — moderate motes count (36) to balance density and performance */}
        <MotesLayer count={36} depth={Math.min(1, scroll)} />
      </div>
    </div>
  );
});

export default BackgroundAbyss;
