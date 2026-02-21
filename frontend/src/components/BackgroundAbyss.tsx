import LightRays from './LightRays'; 
import MotesLayer from "./MotesLayer";
import { memo } from 'react';

interface BackgroundAbyssProps {
  depth?: number;
}

const BackgroundAbyss = memo(function BackgroundAbyss({ depth = 0 }: BackgroundAbyssProps) {
    return (
      <div 
        className="fixed inset-0 z-0 pointer-events-none will-change-transform bg-black" 
        style={{ transform: 'translateZ(0)' }}
        aria-hidden="true"
      >
        {/* ATMOSPHERIC WRAPPER: This handles the smoothing */}
        <div 
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            filter: `brightness(${1 - depth * 0.6}) blur(${depth * 2}px)`,
            opacity: 1 - depth * 0.3
          }}
        >
          {/* 1. BASE GRADIENT OVERLAY */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(to bottom, \
                rgba(6, 212, 179, 0.25) 0%,   /* Bright Mint/Teal tint at the top */ \
                rgba(2, 50, 50, 1) 15%,       /* Stronger deep teal */ \
                rgba(2, 60, 80, 0.8) 50%,     /* Brighter Blue-Teal midsection */ \
                rgba(0, 0, 0, 1) 100%)",      /* Still fades to black at the floor */
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
              noiseAmount={0.04}
              distortion={0.05}        
              pulsating={true}
              fadeDistance={5}
              mouseInfluence={0}   
              followMouse={false}   
              saturation={3}
            />
          </div>

          {/* 3. MOTES (Dimmed by the parent wrapper) */}
          <MotesLayer count={40} depth={depth} />
          
        </div>
      </div>
    );
});

export default BackgroundAbyss;