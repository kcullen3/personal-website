/* Content for the Splinter project card on the Robotics page */
import splinter from "../Assets/Robotics/splinter.png";
import splinterGuts from "../Assets/Robotics/splinter_guts.png";
import splinterExplosion from "../Assets/Robotics/splinter_explosion.png";
import splinter1 from "../Assets/Robotics/splinter1.png";
import splinter2 from "../Assets/Robotics/splinter2.png";
import splinter3 from "../Assets/Robotics/splinter3.png";
import splinter4 from "../Assets/Robotics/splinter4.png";
import splinter5 from "../Assets/Robotics/splinter5.png";
import splinter6 from "../Assets/Robotics/splinter6.png";
import splinter7 from "../Assets/Robotics/splinter7.png";
import splinter8 from "../Assets/Robotics/splinter8.png";

export const SLIDES = [
    { img: splinter, caption: "Me 'n Splinter hanging out" },
    { img: splinter1, caption: "Splinter's control panel" },
    { img: splinter2, caption: "ABB's I/Os" },
    { img: splinter3, caption: "ClearCore microcontroller setup" },
    { img: splinter4, caption: "Custom 3D printed house for temp. controllers" },
    { img: splinter5, caption: "Top-mounted clay extruder" },
    { img: splinter6, caption: "Custom front-mounted thermoplastic extruder" },
    { img: splinter7, caption: "Front-mounted clay extruder" },
    { img: splinter8, caption: "Custom machined wiring harness" },
    { img: splinterGuts, caption: "Me messing with Splinter's insides" },
    { img: splinterExplosion, caption: "A perfectly timed photo - of my new clay extruder hose exploding!" },
];

export const HIGHLIGHTS = [
    "Systems Engineering & Multi-System Integration",
    "Electrical Systems Design (120V AC / 24V DC / Signals)",
    "Technical Documentation & SOPs",
    "Custom C++ Firmware & Motor Control",
    "Custom Toolhead Design & Fabrication",
];

export const CONTENT = {
    excelLabel: "Cables, Connectors & IOs",
    excelCaption: "Full wiring reference for Splinter's electrical systems.",
    docLabel: "Splinter Toolheads SOP",
    docCaption: "Standard operating procedure & design documentation for Splinter's modular toolhead system.",
};
