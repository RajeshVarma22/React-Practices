import React, { useState } from "react";
import { motion } from "framer-motion";
import "./framer.css";

const FramerTesting = () => {
  const [rotate, setRotate] = useState(false);
  const [move, setMove] = useState(false);
  return (
    <div id="FramerTesting" className="text-white">
      <motion.div
        id="firstDiv"
        animate={{ x: 900, y: 200, scale: 1 }}
        transition={{ type: "tween", duration: 3 }}
        initial={{ scale: 0 }}
      >
        <p>` animate = Move X : 900 , Y: 200, scale: 1 `</p>
        <p>`initial = scale : 0`</p>
        <p>transition = type : "tween", duration: 3</p>
      </motion.div>

      <motion.div
        id="secondDiv"
        animate={{ rotate: rotate ? 90 : 0 }}
        transition={{ type: "tween", duration: 3 }}
        onClick={() => setRotate(!rotate)}
      >
        <p>animate = rotate: rotate ? 90 : 0 </p>
      </motion.div>

      <motion.div id="thirdParentDiv">
        <motion.div
          id="thirdDiv"
          animate={{ x: move ? 90 : 0 }}
          transition={{ type: "tween", duration: 0.5 }}
          onClick={() => setMove(!move)}
        ></motion.div>
      </motion.div>

      <motion.div id="thirdParentDiv2">
        <motion.div
          id="thirdDiv"
          animate={{ y: move ? 90 : 0 }}
          transition={{ type: "spring", bounce: 10, duration: 0.5 }}
          onClick={() => setMove(!move)}
        ></motion.div>
      </motion.div>

      <motion.div id="thirdParentDiv3">
        <motion.div
          id="thirdDiv"
          animate={{ x: move ? 90 : 0 }}
          transition={{ type: "inertia", velocity: 100 }}
          onClick={() => setMove(!move)}
        ></motion.div>
      </motion.div>

      <motion.div id="thirdParentDiv3">
        <motion.div
          id="thirdDiv"
          animate={{ x: move ? 1390 : 0 }}
          transition={{ type: "just", velocity: 100, duration: 5 }}
          onClick={() => setMove(!move)}
        ></motion.div>
      </motion.div>

      <motion.div id="onHover" whileHover={{ scale: 2 }} className="p-2">
        Hover
      </motion.div>

      <motion.div id="onHover" drag whileDrag={{ scale: 2 }} className="p-2">
        Drag
      </motion.div>

      <motion.div
        id="onHover"
        drag="y"
        whileDrag={{ scale: 2 }}
        className="p-1 text-center"
      >
        Drag Y
      </motion.div>

      <motion.div
        id="onHover"
        drag="x"
        dragConstraints={{ right: 50 }}
        whileDrag={{ scale: 2 }}
        className="p-1 text-center"
      >
        Drag r:50
      </motion.div>

      <motion.div
        id="textDiv"
        transition={{ type: "tween", duration: 0.5 }}
        whileInView={{ scale: 1 }}
        initial={{ scale: 0 }}
        className="p-2"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          laudantium consequuntur, quaerat velit blanditiis quidem dolorem atque
          repellendus veniam laboriosam repellat vero, in, at maxime id cumque
          mollitia. Ad, quaerat?
        </p>
      </motion.div>

      <motion.div
        id="textDiv"
        transition={{ type: "tween", duration: 0.5 }}
        whileTap={{ scale: 0 }}
        initial={{ scale: 1 }}
        className="p-2"
      >
        <p>Left click and hold me</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          laudantium consequuntur, quaerat velit blanditiis quidem dolorem atque
          repellendus veniam laboriosam repellat vero, in, at maxime id cumque
          mollitia. Ad, quaerat?
        </p>
      </motion.div>

      <h2>These are like key frames</h2>

      <motion.div
        animate={{ rotate: [0, 100, 100, 0, 0, 200, 200, 0, 0, 360, 360, 0] }}
        transition={{ duration: 5 }}
        id="simpleRotate"
        className="text-center m-auto"
      >
        <p>Refresh to see</p>
        <p>This is simple rotate and rotate back</p>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 100, 100, 0, 0, 200, 200, 0, 0, 360, 360, 0] }}
        transition={{ duration: 5, repeat: "Infinity" }}
        id="simpleRotate"
        className="text-center "
      >
        <p>This is Infinate rotate and rotate back</p>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360, 360, 0], x: [0, 360, 360, 0] }}
        transition={{ duration: 3, repeat: "Infinity" }}
        id="simpleRotate"
        className="text-center "
      >
        <p>This is Infinate rotate and rotate back</p>
      </motion.div>

      <div className="bg-success p-5 m-5">
        <motion.div
          className="contentToCheck bg-danger p-5 m-5"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="contentToCheck bg-warning p-5 m-5"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5 }}
          >
            Refresh the page to check
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FramerTesting;
