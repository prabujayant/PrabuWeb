export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Cool violet wash bleeding from the top, like a distant aurora */}
      <div
        className="animate-aurora absolute inset-x-0 top-[-22%] h-[75vh]"
        style={{
          background:
            "radial-gradient(90% 100% at 50% 0%, rgba(var(--glow-a), 0.16), transparent 70%)",
        }}
      />

      {/* Warm glow, bottom-left */}
      <div
        className="animate-orb-a absolute bottom-[-20%] left-[-14%] h-[55vw] w-[55vw] min-h-[420px] min-w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(var(--glow-b), 0.11), transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Ice-blue glow, right */}
      <div
        className="animate-orb-b absolute right-[-12%] top-[6%] h-[46vw] w-[46vw] min-h-[380px] min-w-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(var(--glow-c), 0.09), transparent 65%)",
          filter: "blur(70px)",
        }}
      />

      {/* Violet drift, lower-center */}
      <div
        className="animate-orb-c absolute bottom-[-10%] left-[30%] h-[50vw] w-[50vw] min-h-[400px] min-w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(var(--glow-a), 0.08), transparent 68%)",
          filter: "blur(80px)",
        }}
      />

      {/* Faint blueprint grid near the top */}
      <div className="bg-grid absolute inset-0" />

      {/* Grain and vignette to finish */}
      <div className="bg-noise absolute inset-0" />
      <div className="bg-vignette absolute inset-0" />
    </div>
  );
}
