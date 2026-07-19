import React, { useEffect, useRef } from "react";
import Particles from "react-tsparticles";

const SKY_W = 2560; // fixed sky canvas size
const SKY_H = 1440;

const allConstellations = [
  {
    name: "Orion",
    origin: { x: 200, y: 150 },
    stars: [
      { x: 0, y: 0 },      // Meissa (head)
      { x: -40, y: 80 },   // Betelgeuse
      { x: 40, y: 80 },    // Bellatrix
      { x: -55, y: 160 },  // Alnitak
      { x: 0, y: 150 },    // Alnilam
      { x: 55, y: 140 },   // Mintaka
      { x: 0, y: 210 },    // Sword/Nebula
      { x: -60, y: 280 },  // Saiph
      { x: 60, y: 260 },   // Rigel
      { x: -90, y: 100 },  // Shield 1
      { x: -90, y: 140 },  // Shield 2
      { x: -90, y: 180 },  // Shield 3
    ],
    lines: [
      [0, 1], [0, 2], [1, 3], [2, 5], [3, 4], [4, 5], [4, 6], [3, 7], [5, 8], [1, 9], [9, 10], [10, 11],
    ],
  },
  {
    name: "Andromeda",
    origin: { x: 900, y: 80 },
    stars: [
      { x: 0, y: 0 },      // Alpheratz
      { x: 60, y: -30 },   // Delta And
      { x: 120, y: -20 },  // Mirach
      { x: 180, y: -50 },  // Mu And
      { x: 240, y: -80 },  // Almach
      { x: 60, y: 30 },    // Nu And
      { x: 120, y: 60 },   // Phi And
      { x: -60, y: 20 },   // Upsilon And
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [0, 7],
    ],
  },
  {
    name: "Aries",
    origin: { x: 600, y: 200 },
    stars: [
      { x: 0, y: 0 },      // Hamal
      { x: 40, y: -20 },   // Sheratan
      { x: 70, y: -10 },   // Mesarthim
      { x: 90, y: 20 },    // 41 Arietis
      { x: -30, y: 30 },   // Botein
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [0, 4],
    ],
  },
  {
    name: "Taurus",
    origin: { x: 400, y: 300 },
    stars: [
      { x: 0, y: 0 },      // Aldebaran
      { x: -50, y: -40 },  // Ain
      { x: -80, y: -20 },  // Hyadum I
      { x: -60, y: 30 },   // Theta Tau
      { x: -30, y: 50 },   // Hyadum II
      { x: 50, y: -80 },   // El Nath
      { x: -120, y: -60 }, // Pleiades 1
      { x: -140, y: -80 }, // Pleiades 2
      { x: -130, y: -100 },// Pleiades 3
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 5], [1, 6], [6, 7], [7, 8],
    ],
  },
  {
    name: "Gemini",
    origin: { x: 700, y: 320 },
    stars: [
      { x: 0, y: 0 },      // Castor
      { x: 40, y: 0 },     // Pollux
      { x: -20, y: 60 },   // Wasat
      { x: 60, y: 60 },    // Kappa Gem
      { x: -30, y: 120 },  // Mebsuda
      { x: 70, y: 120 },   // Propus
      { x: -20, y: 180 },  // Alzirr
      { x: 60, y: 180 },   // Mu Gem
      { x: 10, y: 240 },   // Alhena
      { x: 50, y: 240 },   // Nu Gem
    ],
    lines: [
      [0, 2], [2, 4], [4, 6], [6, 8],
      [1, 3], [3, 5], [5, 7], [7, 9],
      [8, 9], [0, 1],
    ],
  },
  {
    name: "Cancer",
    origin: { x: 950, y: 350 },
    stars: [
      { x: 0, y: 0 },      // Acubens
      { x: 50, y: -30 },   // Asellus Australis
      { x: 50, y: 30 },    // Asellus Borealis
      { x: 100, y: 0 },    // Tarf
      { x: -50, y: 0 },    // Iota Cancri
    ],
    lines: [
      [4, 0], [0, 1], [0, 2], [1, 3], [2, 3],
    ],
  },
  {
    name: "Leo",
    origin: { x: 1150, y: 280 },
    stars: [
      { x: 0, y: 0 },      // Regulus
      { x: -20, y: -60 },  // Eta Leonis
      { x: 10, y: -120 },  // Rasalas
      { x: 60, y: -90 },   // Algieba
      { x: 100, y: -110 }, // Adhafera
      { x: 130, y: -80 },  // Zosma
      { x: 160, y: -40 },  // Chertan
      { x: 200, y: -80 },  // Denebola
      { x: 30, y: 40 },    // Subra
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [3, 0], [5, 6], [6, 7], [0, 8],
    ],
  },
  {
    name: "Virgo",
    origin: { x: 1400, y: 400 },
    stars: [
      { x: 0, y: 0 },      // Spica
      { x: -60, y: -80 },  // Porrima
      { x: -100, y: -140 },// Auva
      { x: -140, y: -80 }, // Vindemiatrix
      { x: -80, y: 40 },   // Heze
      { x: -40, y: 80 },   // Syrma
      { x: 40, y: -40 },   // Theta Vir
      { x: 80, y: -20 },   // Zaniah
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [1, 4], [4, 5], [0, 6], [6, 7],
    ],
  },
  {
    name: "Libra",
    origin: { x: 1700, y: 500 },
    stars: [
      { x: 0, y: 0 },      // Zubenelgenubi
      { x: 60, y: -40 },   // Zubeneschamali
      { x: 30, y: 60 },    // Brachium
      { x: 90, y: 20 },    // Gamma Lib
      { x: -40, y: 40 },   // Theta Lib
    ],
    lines: [
      [0, 1], [0, 2], [1, 3], [2, 3], [0, 4],
    ],
  },
  {
    name: "Scorpius",
    origin: { x: 1900, y: 200 },
    stars: [
      { x: 0, y: 0 },      // Graffias
      { x: 40, y: 20 },    // Dschubba
      { x: 80, y: 10 },    // Pi Sco
      { x: 40, y: 60 },    // Antares
      { x: 30, y: 110 },   // Tau Sco
      { x: 20, y: 160 },   // Epsilon Sco
      { x: 25, y: 210 },   // Mu Sco
      { x: 40, y: 260 },   // Zeta Sco
      { x: 55, y: 310 },   // Eta Sco
      { x: 70, y: 350 },   // Theta Sco
      { x: 90, y: 330 },   // Iota Sco
      { x: 110, y: 310 },  // Shaula
      { x: 120, y: 330 },  // Lesath
    ],
    lines: [
      [0, 1], [1, 2], [0, 3], [1, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12],
    ],
  },
  {
    name: "Sagittarius",
    origin: { x: 2100, y: 350 },
    stars: [
      { x: 0, y: 0 },      // Rukbat
      { x: 50, y: -30 },   // Arkab
      { x: 80, y: -80 },   // Alnasl (teapot tip)
      { x: 60, y: -130 },  // Kaus Media
      { x: 30, y: -160 },  // Kaus Borealis
      { x: 100, y: -150 }, // Kaus Australis
      { x: 140, y: -120 }, // Ascella
      { x: 160, y: -80 },  // Nunki
      { x: 120, y: -60 },  // Tau Sgr
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 7], [7, 8], [8, 2],
    ],
  },
  {
    name: "Capricornus",
    origin: { x: 2200, y: 600 },
    stars: [
      { x: 0, y: 0 },      // Algedi
      { x: 40, y: -10 },   // Dabih
      { x: 80, y: 20 },    // Nashira
      { x: 100, y: 60 },   // Deneb Algedi
      { x: 60, y: 80 },    // Zeta Cap
      { x: 20, y: 70 },    // Theta Cap
      { x: -20, y: 50 },   // Psi Cap
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0],
    ],
  },
  {
    name: "Aquarius",
    origin: { x: 2000, y: 700 },
    stars: [
      { x: 0, y: 0 },      // Sadalsuud
      { x: 60, y: -30 },   // Sadalmelik
      { x: 100, y: 20 },   // Sadachbia
      { x: 40, y: 60 },    // Jar 1
      { x: 70, y: 70 },    // Jar 2
      { x: 100, y: 60 },   // Jar 3
      { x: 70, y: 110 },   // Skat
      { x: 40, y: 140 },   // Albali
      { x: 100, y: 140 },  // Ancha
      { x: 60, y: 180 },   // Flow 1
      { x: 80, y: 220 },   // Flow 2
    ],
    lines: [
      [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [2, 6], [6, 7], [6, 8], [7, 9], [9, 10],
    ],
  },
  {
    name: "Pisces",
    origin: { x: 300, y: 700 },
    stars: [
      { x: 0, y: 0 },      // Eta Psc (west fish)
      { x: -50, y: 40 },
      { x: -70, y: 80 },
      { x: -40, y: 110 },
      { x: 10, y: 100 },
      { x: 20, y: 60 },
      { x: 120, y: 40 },   // Alrescha (knot)
      { x: 170, y: 0 },    // east fish
      { x: 210, y: -40 },
      { x: 240, y: 0 },
      { x: 210, y: 40 },
      { x: 170, y: 60 },
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [4, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 6],
    ],
  },
  {
    name: "Canis Major",
    origin: { x: 500, y: 900 },
    stars: [
      { x: 0, y: 0 },      // Sirius
      { x: -40, y: -60 },  // Muliphen
      { x: 40, y: -60 },   // Mirzam
      { x: -60, y: 60 },   // Wezen
      { x: 60, y: 70 },    // Adhara
      { x: -20, y: 130 },  // Aludra
      { x: 80, y: 110 },   // Eta CMa
      { x: -100, y: 90 },  // Delta CMa
      { x: -110, y: 40 },  // Nu CMa
    ],
    lines: [
      [1, 0], [0, 2], [0, 3], [3, 4], [4, 6], [3, 7], [7, 5], [3, 8], [8, 1],
    ],
  },
  {
    name: "Bootes",
    origin: { x: 1300, y: 700 },
    stars: [
      { x: 0, y: 0 },      // Arcturus (brightest)
      { x: -40, y: -80 },  // Eta Boo
      { x: 50, y: -90 },   // Rho Boo
      { x: -70, y: -160 }, // Gamma Boo
      { x: 80, y: -170 },  // Beta Boo
      { x: -30, y: -220 }, // Delta Boo
      { x: 40, y: -230 },  // Mu Boo
      { x: 5, y: -270 },   // Lambda Boo (top)
    ],
    lines: [
      [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 7],
    ],
  },
];

function ParticleField() {
  const canvasRef = useRef(null);
  const driftRef = useRef([]);
  const shootingStarsRef = useRef([]);
  const visibleRef = useRef([]);
  const fadeRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animFrame;

    // Fixed large sky canvas
    canvas.width = SKY_W;
    canvas.height = SKY_H;

    // Initialize drift
    driftRef.current = allConstellations.map(() => ({
      dx: (Math.random() - 0.5) * 0.04,
      dy: (Math.random() - 0.5) * 0.04,
      offsetX: 0,
      offsetY: 0,
    }));

    // Pick 9 random constellations to show, rotate every 20s
    const pickVisible = () => {
      const shuffled = [...allConstellations.map((_, i) => i)].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 9);
    };

    visibleRef.current = pickVisible();
    fadeRef.current = allConstellations.map(() => 0);
    visibleRef.current.forEach(i => { fadeRef.current[i] = 1; });

    // Rotate constellations every 20 seconds
    const rotateInterval = setInterval(() => {
      const next = pickVisible();
      // Fade out old
      visibleRef.current.forEach(i => {
        if (!next.includes(i)) fadeRef.current[i] = Math.max(0, fadeRef.current[i]);
      });
      visibleRef.current = next;
    }, 20000);

    // Shooting stars
    const spawnShootingStar = () => {
      shootingStarsRef.current.push({
        x: Math.random() * SKY_W,
        y: Math.random() * SKY_H * 0.5,
        vx: 10 + Math.random() * 8,
        vy: 4 + Math.random() * 4,
        length: 100 + Math.random() * 100,
        opacity: 1,
        fade: 0.012 + Math.random() * 0.01,
      });
    };
    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.7) spawnShootingStar();
    }, 2500);

    const draw = () => {
      ctx.clearRect(0, 0, SKY_W, SKY_H);

      // Fade in/out constellations
      allConstellations.forEach((constellation, i) => {
        const isVisible = visibleRef.current.includes(i);
        if (isVisible && fadeRef.current[i] < 1) {
          fadeRef.current[i] = Math.min(1, fadeRef.current[i] + 0.002);
        } else if (!isVisible && fadeRef.current[i] > 0) {
          fadeRef.current[i] = Math.max(0, fadeRef.current[i] - 0.002);
        }

        const opacity = fadeRef.current[i];
        if (opacity <= 0) return;

        const drift = driftRef.current[i];
        drift.offsetX += drift.dx;
        drift.offsetY += drift.dy;
        if (Math.abs(drift.offsetX) > 30) drift.dx *= -1;
        if (Math.abs(drift.offsetY) > 30) drift.dy *= -1;

        const ox = constellation.origin.x + drift.offsetX;
        const oy = constellation.origin.y + drift.offsetY;

        const stars = constellation.stars.map(s => ({
          x: ox + s.x,
          y: oy + s.y,
        }));

        // Lines
        constellation.lines.forEach(([a, b]) => {
          ctx.beginPath();
          ctx.moveTo(stars[a].x, stars[a].y);
          ctx.lineTo(stars[b].x, stars[b].y);
          ctx.strokeStyle = `rgba(155, 114, 207, ${0.25 * opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        });

        // Stars
        stars.forEach((star, idx) => {
          const isMain = idx === 0;
          const radius = isMain ? 2.8 : 1.8;
          const glowRadius = isMain ? 7 : 4;

          ctx.beginPath();
          ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${isMain ? opacity : opacity * 0.85})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(155,114,207,${isMain ? 0.2 * opacity : 0.1 * opacity})`;
          ctx.fill();
        });
      });

      // Shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter(s => s.opacity > 0);
      shootingStarsRef.current.forEach(s => {
        const angle = Math.atan2(s.vy, s.vx);
        const tailX = s.x - Math.cos(angle) * s.length;
        const tailY = s.y - Math.sin(angle) * s.length;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.5, `rgba(200,164,212,${s.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(255,255,255,${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;
        s.opacity -= s.fade;
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      clearInterval(rotateInterval);
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Particles
        id="tsparticles"
        style={{ pointerEvents: "none" }}
        params={{
          particles: {
            number: { value: 200, density: { enable: true, value_area: 800 } },
            color: { value: ["#9B72CF", "#ffffff", "#C8A4D4"] },
            shape: { type: ["circle", "star"] },
            opacity: {
              value: 0.7,
              random: true,
              anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 2.5,
              random: true,
              anim: { enable: true, speed: 0.8, size_min: 0.3, sync: false },
            },
            line_linked: { enable: false },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            events: {
              onhover: { enable: false },
              onclick: { enable: false },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
}

export default ParticleField;
