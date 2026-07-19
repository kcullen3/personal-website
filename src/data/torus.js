/* Content for the Torus project card on the Robotics page */
import torus1 from "../Assets/Robotics/torus1.jpg";
import torus2 from "../Assets/Robotics/torus2.JPEG";
import torus3 from "../Assets/Robotics/torus3.jpg";
import torus4 from "../Assets/Robotics/torus4.JPG";

export const SLIDES = [
    { img: torus1 },
    { img: torus2 },
    { img: torus3 },
    { img: torus4 },
];

export const HIGHLIGHTS = [
    "Non-Planar 3D Printing on a 6-Axis Robotic Arm",
    "Microcontroller Integration",
    "Large-Scale Fabrication",
    "Wireless LED System Design & Control",
    "Team Leadership & Intern Management",
    "Art Installation Design & Engineering",
];

export const leftParagraphs = [
    `At 12.5 feet in diameter, "The Torus" is a triangular-twisted torus ring printed in clear
    PETG using a 6-axis robotic arm, not a standard desktop 3D printer.
    Eight individual parts, each massive by any standard. Inside: 40+ feet of
    wirelessly controlled LED strip driven by a wireless microcontroller system.
    Non-planar 3D printing on a robotic arm is already rare, and doing it at this
    scale pushes it further. The hardware was one problem. Getting every system to
    run at the same time was the real one: a ClearCore coordinating temperature
    controllers, motors, and sensors through custom C++ code.`,
    `On the project management side, I was leading a team of four directly on the Torus while
    simultaneously managing 12–15 interns across the broader lab. The logistics were easy
    compared to actually getting people to see what we were building. Teaching people not
    just the technical skills, but the difference between the research process and the
    manufacturing process. I remember specific moments where an intern's face would just
    light up because it finally clicked, what we were building and how to actually do it.
    Those moments made the rest of it worth it.`,
];

export const rightParagraphs = [
    `A torus is one of those shapes that's more interesting the longer you look at it, an
    infinite surface that folds endlessly back into itself, with no inside and no outside.
    In physics, it shows up describing the topology of spacetime under certain models and
    the structure of planetary magnetic fields. It's also just a good-looking shape. That
    combination, math that means something and a form that holds your attention, is why I
    picked it.`,
    `The Torus wasn't just a cool print. It proved a small nonprofit in New Bedford could build
    something most well-funded labs couldn't pull off. The day it went up, I held my breath
    the entire time. It still hangs in the NBRR facility today, lit up and one of a kind.`,
];
