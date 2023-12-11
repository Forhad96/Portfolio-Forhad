"use client";

import { useEffect, useState } from "react";
// import Particles from "react-tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull,loadSlim } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";
const ParticlesBg = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
    // const loadParticles = async (main) => {
    //   await loadFull(main);
    // }
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      {init && (
        <Particles
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            particles: {
              number: {
                value: 10,
                density: {
                  enable: false,
                  value_area: 800,
                },
              },
              color: {
                value: "#fff",
              },
              shape: {
                type: "star",
                options: {
                  sides: 5,
                },
              },
              opacity: {
                value: 0.8,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 4,
                random: false,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              rotate: {
                value: 0,
                random: true,
                direction: "clockwise",
                animation: {
                  enable: true,
                  speed: 5,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 600,
                color: "#ffffff",
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: ["grab"],
                },
                onclick: {
                  enable: false,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            background: {
              color: "#222831",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
          }}
          id="tsparticles"
        ></Particles>
      )}
    </>
  );
};

export default ParticlesBg;
