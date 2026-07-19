import React from "react";
import Card from "react-bootstrap/Card";
import { BsBoxArrowUpRight } from "react-icons/bs";
import {
  bioParagraphs,
  bioLead,
  bioEmphasis,
  currentlyWorkingOn,
  beyondTheWork,
  bioQuote,
  bioQuoteAuthor,
} from "../../data/bio";

function AboutCard() {
  return (
    <div >
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {bioParagraphs.map((paragraph, i) => (
              <p key={i} style={{ textAlign: "justify" }}>
                {paragraph}
              </p>
            ))}
            <p style={{ textAlign: "justify" }}>
              {bioLead}
              <em className="white"> {bioEmphasis}</em>
            </p>

            <ul>
              <li className="about-activity" style={{ marginBottom: "8px" }}>
                <strong className="cyan">Currently Working On</strong>
              </li>
              {currentlyWorkingOn.map((item, i) => (
                <li className="about-activity" key={i}>
                  {item.link ? (
                    <>
                      {item.emoji ? `${item.emoji} ` : ""}
                      {item.prefix}
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--accent1_dull)", textDecoration: "underline" }}
                      >
                        {item.link.text} <BsBoxArrowUpRight size={9} />
                      </a>
                      {item.suffix}
                    </>
                  ) : (
                    item.text
                  )}
                </li>
              ))}

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
              {beyondTheWork.map((text, i) => (
                <li className="about-activity" key={i}>
                  {text}
                </li>
              ))}
            </ul>

            <p style={{ color: "var(--accent2)", fontFamily: "Lato, sans-serif", marginTop: "16px" }}>
              <em>{bioQuote}</em>
            </p>
            <footer className="blockquote-footer">{bioQuoteAuthor}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div >
  );
}

export default AboutCard;
