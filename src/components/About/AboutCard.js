import React from "react";
import Card from "react-bootstrap/Card";
import { BsBoxArrowUpRight } from "react-icons/bs";

function AboutCard() {
  return (
    <div >
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Keigan works where most people stop looking. He's got a physics
              degree, he builds robots, he does energy healing sessions, and
              he starts companies on the side. Gravitational wave models,
              robotics systems, community platforms, parapsychology research —
              he's built all of it, often at the same time.
            </p>
            <p style={{ textAlign: "justify" }}>
              Doesn't matter if he's writing code, running a healing session,
              wiring a new component, or reading up on consciousness research.
              <em className="white"> The throughline is always the same: a relentless
              curiosity about what lies just beyond the edge of what we think
              is possible.</em>
            </p>

            <ul>
              <li className="about-activity" style={{ marginBottom: "8px" }}>
                <strong className="cyan">Currently Working On</strong>
              </li>
              <li className="about-activity">
                {"🛠️ Building "}
                <a
                  href="https://backscratch.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}
                >
                  BackScratch <BsBoxArrowUpRight size={9} />
                </a>
                {" — a barter platform for small businesses"}
              </li>
              <li className="about-activity">
                {"📈 Developing algorithmic trading strategies"}
              </li>
              <li className="about-activity">
                {"🔎 Looking for work in engineering, research and finance"}
              </li>
              <li className="about-activity">
                {"💚 Reiki & energy healing practice"}
              </li>

              {/*
              <li className="about-activity">
                {"📱 Content creation on "}
                <a
                  href="https://www.instagram.com/keigancullen"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent1_dull)" }}>
                  Instagram <BsBoxArrowUpRight size={9} />
                </a>
                {" — for the scientist & spiritual seeker alike"}
              </li>
              */}

              <li className="about-activity" style={{ marginTop: "16px", marginBottom: "8px" }}>
                <strong className="cyan">Beyond The Work</strong>
              </li>
              <li className="about-activity">
                {"🍳 Cooks for everyone he loves"}
              </li>
              <li className="about-activity">
                {"🦅 Eagle Scout — still living by the code"}
              </li>
              <li className="about-activity">
                {"🤝 Networking and personal development on the regular"}
              </li>
            </ul>

            <p style={{ color: "var(--accent1)", marginTop: "16px" }}>
              <em>{"\"All that we see comes from the stars, the Earth, and each other.\""}</em>
            </p>
            <footer className="blockquote-footer">Keigan</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div >
  );
}

export default AboutCard;
