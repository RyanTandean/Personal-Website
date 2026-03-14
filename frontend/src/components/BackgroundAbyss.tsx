import LightRays from "./LightRays";
import MotesLayer from "./MotesLayer";
import { memo } from "react";
import useScrollParallax from "../hooks/useScrollParallax";

const BackgroundAbyss = memo(function BackgroundAbyss() {
  const scroll = useScrollParallax();

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none will-change-transform bg-black"
      style={{ transform: "translateZ(0)" }}
      aria-hidden="true"
    >
      {/* ATMOSPHERIC WRAPPER: This handles the smoothing and now participates in scroll */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          filter: `brightness(1) blur(0px)`,
          opacity: 1,
        }}
      >
        {/* 1. BASE GRADIENT OVERLAY — uses CSS var --grad (0..1) updated by the hook */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, \
                rgba(6, 212, 179, var(--grad, 0.25)) 0%, \
                rgba(2, 50, 50, 1) 15%, \
                rgba(2, 60, 80, 0.8) 50%, \
                rgba(0, 0, 0, 1) 100%)",
          }}
        />

        {/* 2. STABLE LIGHT RAYS (Props remain constant to prevent jitter) */}
        <div className="absolute inset-0 overflow-hidden">
          <LightRays
            raysOrigin="top-center"
            raysColor="#06d4b3"
            raysSpeed={0.2}
            lightSpread={1.0}
            rayLength={3.0}
            noiseAmount={0.10}
            distortion={0.05}
            pulsating={true}
            fadeDistance={5}
            mouseInfluence={0}
            followMouse={false}
            saturation={5}
          />
        </div>

        {/* 3. MOTES — moderate motes count (36) to balance density and performance */}
        <MotesLayer count={36} depth={Math.min(1, scroll)} />
      </div>
    </div>
  );
});

export default BackgroundAbyss;
