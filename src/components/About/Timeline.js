import React, { useState } from "react";
import { timelineData } from "../../data/timeline";

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