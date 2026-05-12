import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <div >
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Keigan lives at the edge of what science can currently explain —
              and he wouldn't have it any other way. A physicist by training, engineer by trade,
              healer by calling and entrepreneur for fun, he has spent his career building things that matter:
              from gravitational wave models and robotics systems to community platforms
              and independent parapsychology research.
            </p>
            <p style={{ textAlign: "justify" }}>
              Whether he's writing code, facilitating a healing session,
              wiring a new component or diving into consciousness research,
              the throughline is always the same — a relentless curiosity
              about what lies just beyond the edge of what we think is possible.
            </p>

            <ul>
              <li className="about-activity" style={{ marginBottom: "8px" }}>
                <strong className="cyan">Currently Working On</strong>
              </li>
              <li className="about-activity">
                {"🛠️ Building "}
                <a href="projects/backscratch" style={{ color: "var(--accent1_dull)" }}>
                  BackScratch
                </a>
                {" — a community platform for small businesses"}
              </li>
              <li className="about-activity">
                {"📈 Developing algorithmic trading strategies"}
              </li>
              <li className="about-activity">
                {"💚 Reiki & energy healing practice"}
              </li>
              <li className="about-activity">
                {"📱 Content creation on "}
                <a
                  href="https://www.instagram.com/keigancullen"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent1_dull)" }}>
                  Instagram
                </a>
                {" — for the scientist & spiritual seeker alike"}
              </li>

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

            <p style={{ color: "var(--accent1)" }}>
              {"\"I don't know what to put for this quote yet!\""}
            </p>
            <footer className="blockquote-footer">Keigan</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div >
  );
}

export default AboutCard;
