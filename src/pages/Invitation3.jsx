import { motion } from "motion/react";
import "./Invitation3.css";

function Invitation3() {
  return (
    <main className="prabhat-invitation">
      {/* Water background */}
      <div className="inv-water-glow inv-glow-one"></div>
      <div className="inv-water-glow inv-glow-two"></div>
      <div className="inv-water-glow inv-glow-three"></div>

      <div className="inv-ray inv-ray-one"></div>
      <div className="inv-ray inv-ray-two"></div>
      <div className="inv-ray inv-ray-three"></div>
      <div className="inv-ray inv-ray-four"></div>

      {/* Floating bubbles */}
      <div className="inv-bubble inv-bubble-one"></div>
      <div className="inv-bubble inv-bubble-two"></div>
      <div className="inv-bubble inv-bubble-three"></div>
      <div className="inv-bubble inv-bubble-four"></div>
      <div className="inv-bubble inv-bubble-five"></div>

      {/* Floating technology elements */}
      <motion.div
        className="tech-float php-float"
        animate={{
          y: [0, -15, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        &lt;?php
      </motion.div>

      <motion.div
        className="tech-float udb-float"
        animate={{
          y: [0, 14, 0],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        UDB
      </motion.div>

      <motion.div
        className="tech-float db-float"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        $_DATA
      </motion.div>

      <motion.div
        className="tech-float code-float"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        &lt;/&gt;
      </motion.div>

      {/* Main glass invitation */}
      <motion.section
        className="prabhat-card"
        initial={{
          opacity: 0,
          y: 45,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="card-shine"></div>

        <motion.p
          className="inv-small-title"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          YOU ARE CORDIALLY INVITED
        </motion.p>

        <motion.div
          className="inv-symbol"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.7,
            type: "spring",
            stiffness: 180,
          }}
        >
          ✦
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        >
          Happy
          <span>Teacher's Day</span>
        </motion.h1>

        <motion.div
          className="inv-divider"
          initial={{ width: 0 }}
          animate={{ width: 90 }}
          transition={{
            delay: 1.1,
            duration: 0.7,
          }}
        />

        <motion.p
          className="inv-message"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.3,
          }}
        >
          To a teacher who turns knowledge into possibility,
          <br />
          challenges into learning, and every lesson into
          <br />
          something worth remembering.
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
          }}
        >
          Prabhat Das
        </motion.h2>

        <motion.p
          className="inv-role"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.7,
          }}
        >
          Faculty · UDB
        </motion.p>

        <motion.div
          className="inv-info"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.9,
          }}
        >
          <div className="info-item">
            <span>DATE</span>
            <strong>03 SEPTEMBER</strong>
          </div>

          <div className="info-divider"></div>

          <div className="info-item">
            <span>ROOM NO.</span>
            <strong>4201</strong>
          </div>
        </motion.div>

        <motion.p
          className="inv-footer"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.1,
          }}
        >
          Connected by knowledge · Guided by you
          <span>✦</span>
        </motion.p>
      </motion.section>

      {/* Bottom aquatic particles */}
      <div className="inv-particle particle-a"></div>
      <div className="inv-particle particle-b"></div>
      <div className="inv-particle particle-c"></div>
      <div className="inv-particle particle-d"></div>
    </main>
  );
}

export default Invitation3;