import LightRays from './LightRays'; 
import MotesLayer from "./MotesLayer";

export default function BackgroundAbyss() {
    return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="beams-bg absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <LightRays
              raysOrigin="top-center"
              raysColor="#06d4b3"    
              raysSpeed={0.2}
              lightSpread={1.0}      
              rayLength={3.0}         
              noiseAmount={0.04}
              distortion={0.0}        
              pulsating={true}
              fadeDistance={5}
              mouseInfluence={0}   
              followMouse={false}   
              saturation={3}
            />
          </div>

          <MotesLayer count={40} />
          
          {/* FULL-HEIGHT GRADIENT OVERLAY */}
          <div
            className="absolute inset-0"
            style={{
              /* Use a very dark teal/green for the mid-tone transition */
              background: "linear-gradient(to bottom, rgba(2, 50, 50, 1) 0%, rgba(2, 36, 48, 0.6) 35%, rgba(2, 24, 36, 0.6) 65%, #000 100%)",
            }}
          />
        </div>
      </div>
    );
}