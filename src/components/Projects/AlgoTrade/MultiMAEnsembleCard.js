/* Case study card for the Multi-MA Ensemble strategy on the AlgoTrade page */
import React from "react";
import { Row, Col } from "react-bootstrap";

import howItWorksDiagram from "../../../Assets/AlgoTrade/fig3_how_it_works.png";
import relativePerformance from "../../../Assets/AlgoTrade/fig1_relative_performance.png";
import calmarVsBaseline from "../../../Assets/AlgoTrade/fig2_calmar_vs_baseline.png";
import scorecardTable from "../../../Assets/AlgoTrade/multi-ma_ensemble.PNG";
import { CONTENT, HIGHLIGHTS } from "../../../data/algoTrade";

const bodyStyle = {
    color: "var(--text)",
    fontFamily: "Lato, sans-serif",
    lineHeight: "1.9",
    fontSize: "var(--font-lg)",
    paddingLeft: "24px",
    paddingRight: "24px",
    textAlign: "left",
    textIndent: "2em",
};

const headingStyle = {
    color: "var(--primary)",
    fontFamily: "Nunito, sans-serif",
    marginBottom: "16px",
    paddingLeft: "24px",
};

const captionStyle = {
    color: "var(--accent1)",
    fontSize: "var(--font-sm)",
    textAlign: "center",
    marginTop: "8px",
    marginBottom: "0",
};

function Figure({ src, alt, maxWidth }) {
    return (
        <div style={{
            maxWidth,
            margin: "0 auto",
            border: "1px solid var(--primary)",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
            padding: "8px",
            backgroundColor: "var(--background)",
        }}>
            <img
                src={src}
                alt={alt}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "6px" }}
            />
        </div>
    );
}

function MultiMAEnsemble() {
    return (
        <div style={{
            border: "1px solid var(--primary)",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
            backgroundColor: "var(--background)",
            padding: "24px",
            marginBottom: "40px",
        }}>

            {/* Intro */}
            <p style={{ ...bodyStyle, marginBottom: "24px" }}>
                {CONTENT.intro}
            </p>

            {/* Strategy */}
            <h4 style={headingStyle}>The Strategy</h4>
            <p style={{ ...bodyStyle, marginBottom: "24px" }}>
                {CONTENT.strategy}
            </p>

            {/* How it works: text + diagram */}
            <h4 style={headingStyle}>How It Works</h4>
            <p style={{ ...bodyStyle, marginBottom: "20px" }}>
                {CONTENT.howItWorks}
            </p>
            <div style={{ marginBottom: "24px" }}>
                <Figure
                    src={howItWorksDiagram}
                    alt="Diagram of the Multi-MA Ensemble signal pipeline: sixteen moving-average signals are quality-filtered, de-correlated via clustering, and the survivors vote on each stock"
                    maxWidth="900px"
                />
            </div>

            {/* Results: text + side-by-side charts */}
            <h4 style={headingStyle}>Results</h4>
            <p style={{ ...bodyStyle, marginBottom: "20px" }}>
                {CONTENT.results}
            </p>
            <Row className="g-3 justify-content-center" style={{ marginBottom: "24px" }}>
                <Col xs={12} md={6} className="d-flex justify-content-center">
                    <Figure
                        src={relativePerformance}
                        alt="Chart of the ensemble's relative performance against buy-and-hold across uptrending and downtrending stock regimes"
                        maxWidth="600px"
                    />
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center">
                    <Figure
                        src={calmarVsBaseline}
                        alt="Chart comparing the ensemble's Calmar ratio against buy-and-hold and the 50/200 moving-average crossover baseline"
                        maxWidth="600px"
                    />
                </Col>
            </Row>

            {/* Full scorecard */}
            <div style={{ marginBottom: "24px" }}>
                <Figure
                    src={scorecardTable}
                    alt="Table of out-of-sample results across eleven stocks, showing the ensemble's win/loss record against buy-and-hold and the 50/200 crossover baseline on a risk-adjusted basis"
                    maxWidth="1000px"
                />
                <p style={captionStyle}>{CONTENT.scorecardCaption}</p>
                <p style={{ ...captionStyle, color: "var(--text)", fontStyle: "italic", marginTop: "4px" }}>
                    Full out-of-sample scorecard
                </p>
            </div>

            {/* Verdict */}
            <h4 style={headingStyle}>Verdict</h4>
            <p style={{ ...bodyStyle, marginBottom: "24px" }}>
                {CONTENT.verdict}
            </p>

            {/* Highlights */}
            <div className="robotics-highlights">
                {HIGHLIGHTS.map((item, i) => (
                    <div key={i} className="robotics-highlight-item">
                        <span className="cyan">✦</span> {item}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default MultiMAEnsemble;
