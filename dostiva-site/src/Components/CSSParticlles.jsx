// src/Components/CSSParticles.jsx

const DOTS = Array.from({ length: 60 }).map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 10}s`,
  duration: `${6 + Math.random() * 10}s`,
}));

export default function CSSParticles() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {DOTS.map((dot, i) => (
        <span
          key={i}
          className="absolute block h-1 w-1 rounded-full bg-white/60 animate-float"
          style={{
            left: dot.left,
            top: dot.top,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}
    </div>
  );
}
