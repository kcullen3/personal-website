import React, { lazy, Suspense } from "react";

// Deferred: react-tsparticles (~9.4MB unpacked) is a purely decorative,
// fixed-position background layer, so it's safe to load after first paint.
const ParticleField = lazy(() => import("./ParticleField"));

function Particle() {
  return (
    <Suspense fallback={null}>
      <ParticleField />
    </Suspense>
  );
}

export default Particle;
