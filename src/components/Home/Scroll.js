import React from "react";
import "./Scroll.css";
import { words } from "../../data/scroll";

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
