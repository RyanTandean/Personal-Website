import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />
      {/* Background Elements */}
      <div className="beams-bg" aria-hidden="true">
        <div className="surface-ripple" />
        <div className="beam beam-1" />
        <div className="beam beam-2" />
        <div className="beam beam-3" />
        <div className="beam beam-4" />
        <div className="beam-fog" />
        <div className="water-tint" />
        <div className="motes" aria-hidden="true">
          {[
            "mote-1",
            "mote-2",
            "mote-3",
            "mote-4",
            "mote-5",
            "mote-6",
            "mote-7",
            "mote-8",
          ].map((m) => (
            <span key={m} className={`mote ${m}`} />
          ))}
        </div>
        {[
          "bubble-1",
          "bubble-2",
          "bubble-3",
          "bubble-4",
          "bubble-5",
          "bubble-6",
          "bubble-7",
          "bubble-8",
          "bubble-9",
        ].map((b) => (
          <div key={b} className={`bubble ${b}`} />
        ))}
      </div>
      <div
        className="absolute inset-0 backdrop-blur-[2px] bg-black/10"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <Outlet />
      </div>
    </main>
  );
}
