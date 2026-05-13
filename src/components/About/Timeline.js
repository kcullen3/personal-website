import React, { useState } from "react";

const timelineData = [
    {
        title: "Entrepreneurship & Freelancing",
        date: "2025 – Present",
        icon: "⚡",
        bullets: [
            "Independent consultant and freelancer for startups, nonprofits, and small businesses",
            "Building BackScratch — a community-first local economy platform",
            "Developing algorithmic trading strategies in Python",
            "Conducting independent parapsychological research and content creation",
        ],
    },
    {
        title: "Energy Healing Practice",
        date: "2024 – Present",
        icon: "💚",
        bullets: [
            "Certified Holy Fire III Reiki I & II practitioner",
            "Offering energy healing, mediumship, and psychic reading sessions",
            "Bridging scientific credibility with genuine intuitive ability",
        ],
    },
    {
        title: "New Bedford Research & Robotics",
        date: "2023 – 2025",
        icon: "🤖",
        bullets: [
            "Third hire at a nonprofit building a technology and research ecosystem",
            "Led AI development, rapid prototyping, and complex system design",
            "Managed both interns and projects, wrote grants, and ran K-12 education programs",
        ],
    },
    {
        title: "UMass Dartmouth",
        date: "2018 – 2022",
        icon: "🔭",
        bullets: [
            "B.S. Physics, Cum Laude — Minor in Mathematics",
            "Researched gravitational waves using high-performance scientific computing",
            "Developed neural network framework for gravitational wave modeling",
            "Teaching Assistant for introductory physics",
        ],
    },
    {
        title: "Restaurant Industry",
        date: "2012 – 2023",
        icon: "🍳",
        bullets: [
            "Years of experience across front and back of house",
            "Built unshakeable work ethic, people skills, and adaptability",
            "Learned the value of craft and community",
        ],
    },
];

function Timeline() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="timeline-wrapper">
            <div className="timeline-track">
                {/* Connecting line */}
                <div className="timeline-line" />

                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() =>
                            setActiveIndex(activeIndex === index ? null : index)
                        }
                    >
                        {/* Node */}
                        <div className="timeline-node">
                            <span className="timeline-icon">{item.icon}</span>
                        </div>

                        {/* Card */}
                        <div className="timeline-card">
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-date">{item.date}</p>

                            {/* Expandable bullets */}
                            <div
                                className={`timeline-bullets ${activeIndex === index ? "expanded" : ""
                                    }`}
                            >
                                <ul>
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;