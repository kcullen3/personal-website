import React, { useState, useEffect, useRef, useCallback } from "react";
import { Row, Col } from "react-bootstrap";

function Slideshow({ slides, description, descriptionSide = "right", noBorder = false, height, rowStyle }) {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef(null);

    const stopAuto = useCallback(() => clearInterval(intervalRef.current), []);

    const startAuto = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
    }, [slides.length]);

    useEffect(() => {
        startAuto();
        return () => stopAuto();
    }, [startAuto, stopAuto]);

    const prev = () => {
        stopAuto();
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
        startAuto();
    };

    const next = () => {
        stopAuto();
        setCurrent((prev) => (prev + 1) % slides.length);
        startAuto();
    };

    const wrapperStyle = {
        ...(noBorder ? { border: "none", boxShadow: "none", backgroundColor: "transparent", maxWidth: "none" } : {}),
        ...(height ? { height } : {}),
    };

    const slideshowCol = (
        <Col md={description ? 7 : 12}>
            <div className="slideshow-wrapper">
                <div className="slideshow-image-container">
                    <div className="slideshow-image-wrapper" style={wrapperStyle}>
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className={`slideshow-slide ${i === current ? "active" : ""}`}
                            >
                                {slide.type === "video" ? (
                                    <video
                                        controls
                                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                    >
                                        <source src={slide.src} type={slide.mime || "video/mp4"} />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img
                                        src={slide.img}
                                        alt={slide.caption || `Slide ${i + 1}`}
                                        className="slideshow-img"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {slides[current].caption && (
                    <p style={{
                        textAlign: "center",
                        color: "rgba(255,255,255,0.55)",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "var(--font-sm)",
                        fontStyle: "italic",
                        marginTop: "8px",
                        marginBottom: 0,
                    }}>
                        {slides[current].caption}
                    </p>
                )}
                {/* Nav row: small arrow — dots — small arrow */}
                <div className="slideshow-nav">
                    <button className="slideshow-arrow-sm" onClick={prev}>&#8249;</button>
                    <div className="slideshow-dots" style={{ margin: 0 }}>
                        {slides.map((_, i) => (
                            <span
                                key={i}
                                className={`slideshow-dot ${i === current ? "active" : ""}`}
                                onClick={() => {
                                    stopAuto();
                                    setCurrent(i);
                                    startAuto();
                                }}
                            />
                        ))}
                    </div>
                    <button className="slideshow-arrow-sm" onClick={next}>&#8250;</button>
                </div>
            </div>
        </Col>
    );

    const descriptionCol = description ? (
        <Col
            md={5}
            className="d-flex align-items-center"
            style={{ padding: "0 24px" }}
        >
            <p style={{
                color: "rgba(255,255,255,0.85)",
                fontFamily: "Lato, sans-serif",
                lineHeight: "1.9",
                fontSize: "var(--font-base)",
            }}>
                {description}
            </p>
        </Col>
    ) : null;

    return (
        <Row className="align-items-center" style={{ marginBottom: "20px", ...rowStyle }}>
            {descriptionSide === "left" ? (
                <>
                    {descriptionCol}
                    {slideshowCol}
                </>
            ) : (
                <>
                    {slideshowCol}
                    {descriptionCol}
                </>
            )}
        </Row>
    );
}

export default Slideshow;
