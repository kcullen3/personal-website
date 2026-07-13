/* Root application component — sets up routing, preloader, and persistent layout (Navbar, Footer) */
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Research from "./components/Research/Research";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import BackScratch from "./components/Projects/BackScratch/BackScratch";
import GravitationalWaves from "./components/Research/GravitationalWaves/GravitationalWaves";
import AlgoTrade from "./components/Projects/AlgoTrade/AlgoTrade";
import Robotics from "./components/Projects/Robotics/Robotics";
import CoupkooReview from "./components/Research/CoupkooReview/CoupkooReview";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";

const PAGE_TITLES = {
  "/": "Keigan Cullen",
  "/about": "Keigan Cullen - About",
  "/projects": "Keigan Cullen - Projects",
  "/projects/backscratch": "Keigan Cullen - BackScratch",
  "/projects/algotrade": "Keigan Cullen - AlgoTrade",
  "/projects/robotics": "Keigan Cullen - Robotics",
  "/research/coupkooreview": "Keigan Cullen - Coupkoo Review",
  "/research": "Keigan Cullen - Research",
  "/research/gravitationalwaves": "Keigan Cullen - Gravitational Waves",
  "/services": "Keigan Cullen - Services",
  "/contact": "Keigan Cullen - Contact",
};

function PageTitle() {
  const location = useLocation();
  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? "Keigan Cullen";
  }, [location.pathname]);
  return null;
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <PageTitle />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/backscratch" element={<BackScratch />} />
            <Route path="/projects/algotrade" element={<AlgoTrade />} />
            <Route path="/projects/robotics" element={<Robotics />} />
            <Route path="/research/coupkooreview" element={<CoupkooReview />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/gravitationalwaves" element={<GravitationalWaves />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
