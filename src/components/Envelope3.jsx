import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./Envelope3.css";

function Envelope3() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      navigate("/prabhat-sir-invitation");
    }, 1800);
  };

  return (
    <main className="php-envelope-page">
      <div className="water-surface"></div>

      <div className="water-ray ray-one"></div>
      <div className="water-ray ray-two"></div>
      <div className="water-ray ray-three"></div>
      <div className="water-ray ray-four"></div>
      <div className="water-ray ray-five"></div>

      <div className="water-glow glow-top"></div>
      <div className="water-glow glow-left"></div>
      <div className="water-glow glow-right"></div>
      <div className="water-glow glow-bottom"></div>

      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-5"></div>
      <div className="bubble bubble-6"></div>
      <div className="bubble bubble-7"></div>
      <div className="bubble bubble-8"></div>
      <div className="bubble bubble-9"></div>
      <div className="bubble bubble-10"></div>

      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="particle particle-6"></div>

      <div className="code-element code-one">
        &lt;?php
      </div>

      <div className="code-element code-two">
        $_DATA
      </div>

      <div className="code-element code-three">
        {"{ }"}
      </div>

      <div className="code-element code-four">
        &lt;/&gt;
      </div>

      <div className="code-element code-five">
        PHP
      </div>

      <div className="data-node node-one">
        <span>UDB</span>
        <small>DATABASE</small>
      </div>

      <div className="data-node node-two">
        <span>SQL</span>
        <small>QUERY</small>
      </div>

      <div className="data-node node-three">
        <span>DB</span>
        <small>DATA</small>
      </div>

      <div className="data-line line-one">
        <span></span>
      </div>

      <div className="data-line line-two">
        <span></span>
      </div>

      <div className="data-line line-three">
        <span></span>
      </div>

      <div className="data-line line-four">
        <span></span>
      </div>

      <div className="tech-grid grid-left"></div>
      <div className="tech-grid grid-right"></div>

      <motion.div
        className="php-envelope-content"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.p
          className="php-label"
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          A SPECIAL INVITATION
        </motion.p>

        <div
          className={`php-envelope ${
            opened ? "php-open" : ""
          }`}
          onClick={handleOpen}
        >
          <motion.div
            className="php-letter"
            animate={
              opened
                ? {
                    y: -125,
                    scale: 1.03,
                  }
                : {
                    y: 0,
                    scale: 1,
                  }
            }
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>WITH GRATITUDE</span>

            <h1>For Prabhat Sir</h1>

            <div className="php-symbol">
              &lt;/&gt;
            </div>

            <p>
              Knowledge connects,
              <br />
              possibilities follow.
            </p>
          </motion.div>

          <div className="php-envelope-back"></div>

          <div className="php-envelope-left"></div>

          <div className="php-envelope-right"></div>

          <div className="php-envelope-front"></div>

          <motion.div
            className="php-envelope-flap"
            animate={
              opened
                ? {
                    rotateX: -180,
                  }
                : {
                    rotateX: 0,
                  }
            }
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <AnimatePresence>
            {!opened && (
              <motion.div
                className="php-seal"
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.5,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 15,
                }}
              >
                &lt;/&gt;
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.p
              className="php-hint"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            >
              Click the envelope to discover your invitation
            </motion.p>
          ) : (
            <motion.p
              className="php-opening-message"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              Connecting knowledge, one lesson at a time ✦
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}

export default Envelope3;