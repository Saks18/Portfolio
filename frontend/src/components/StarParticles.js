import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarParticles = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // full viewport
        background: { color: { value: "#000000" } },
        particles: {
          number: { value: 120 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: true },
          size: { value: 1.4, random: true },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "out" },
          },
        },
      }}
    />
  );
};

export default StarParticles;
