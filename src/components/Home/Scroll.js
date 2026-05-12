import React from "react";
import "./Scroll.css";

const words = [
  "Computational Physicist",
  "Psychic & Energy Healer",
  "Robotics Engineer",
  "Entrepreneur",
  "Parapsychological Researcher",
  "Content Creator",
];

function Scroll() {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-track">
        {/* Render twice for seamless loop */}
        {[...words, ...words].map((word, i) => (
          <span key={i} className="scroll-item">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Scroll;
