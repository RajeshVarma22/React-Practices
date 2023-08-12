import React from "react";
import { motion as m } from "framer-motion";
import "./page.css";

const PajeOne = () => {
  return (
    <m.div
      id="PajeOne"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{opacity: 0}}
    >
      <m.div
        id="two"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1 }}
      >
        <m.div
          id="three"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5 }}
        >
          <m.div
            id="four"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.8 }}
          >
            <m.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.5 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              rerum sunt, unde illum asperiores quis, optio temporibus quos qui
              ullam quibusdam, atque voluptas. Quo, distinctio nam. Nobis esse
              voluptas libero.
            </m.p>
          </m.div>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default PajeOne;
