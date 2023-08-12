import { motion as m, useAnimationControls } from "framer-motion";
import React from "react";

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();

  const rubberbrand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.2,1,1)",
        "scale3d(.85,1.5,1)",
        "scale3d(.65,1,1)",
        "scale3d(1,1.2,1)",
        // " matrix(0, 1, 1, 0, 0, 0)",
        "scale3d(1,1,1)",
      ],
      translate:{duration : 0.6}
    });
  };
  return (
    <m.span
      animate={controls}
      onMouseOver={rubberbrand}
      className="bg-primary px-4 text-white mx-1"
      style={{ borderRadius: "50%", boxShadow: "0px 3px 2px red" }}
    >
      {children}
    </m.span>
  );
};

export default TextSpan;
