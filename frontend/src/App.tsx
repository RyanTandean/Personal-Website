const bubbleClasses = [
  "bubble-1",
  "bubble-2",
  "bubble-3",
  "bubble-4",
  "bubble-5",
  "bubble-6",
  "bubble-7",
  "bubble-8",
  "bubble-9",
];
function App() {
  const moteClasses = [
    "mote-1",
    "mote-2",
    "mote-3",
    "mote-4",
    "mote-5",
    "mote-6",
    "mote-7",
    "mote-8",
  ];

  const bubbleClasses = [
    "bubble-1",
    "bubble-2",
    "bubble-3",
    "bubble-4",
    "bubble-5",
    "bubble-6",
    "bubble-7",
    "bubble-8",
    "bubble-9",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="beams-bg" aria-hidden="true">
        <div className="surface-ripple" />
        <div className="beam beam-1" />
        <div className="beam beam-2" />
        <div className="beam beam-3" />
        <div className="beam beam-4" />
        <div className="beam-fog" />
        <div className="water-tint" />
        <div className="motes" aria-hidden="true">
          {moteClasses.map((moteClass) => (
            <span key={moteClass} className={`mote ${moteClass}`} />
          ))}
        </div>
        {bubbleClasses.map((bubbleClass) => (
          <div key={bubbleClass} className={`bubble ${bubbleClass}`} />
        ))}
      </div>

      <div
        className="absolute inset-0 backdrop-blur-[2px] bg-black/8"
        aria-hidden="true"
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-medium tracking-[0.12em] leading-none text-white [text-shadow:0_0_8px_rgba(255,255,255,0.75),0_0_20px_rgba(255,255,255,0.45),0_0_36px_rgba(255,255,255,0.25)]">
          Ryan Tandean
        </h1>
      </div>
    </main>
  );
}

export default App;
