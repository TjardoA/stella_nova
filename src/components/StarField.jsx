import React from "react";

const stars = [
  { top: "6%", left: "8%", color: "#f39200", size: 34, delay: "0s" },
  { top: "12%", right: "6%", color: "#5da0ff", size: 36, delay: "0.3s" },
  { top: "38%", left: "4%", color: "#1f3b83", size: 30, delay: "0.6s" },
  { top: "54%", right: "8%", color: "#ffbc47", size: 32, delay: "0.1s" },
  { top: "72%", left: "12%", color: "#f39200", size: 30, delay: "0.5s" },
  { top: "82%", right: "14%", color: "#5da0ff", size: 32, delay: "0.2s" },
];

export function StarField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-80" aria-hidden>
      {stars.map((star, i) => (
        <div
          key={i}
          className="floating-star"
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            right: star.right,
            width: star.size,
            height: star.size,
            background: `radial-gradient(circle at 40% 40%, ${star.color} 0 40%, transparent 70%), radial-gradient(circle at 70% 70%, ${star.color} 0 45%, transparent 70%)`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
