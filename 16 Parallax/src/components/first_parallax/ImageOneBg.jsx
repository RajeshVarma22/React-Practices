import React from "react";
import { Parallax } from "react-parallax";
import skyMountain from "../../assets/nightSkyMountain.jpg";
import './first_parallax.css'

const imageOneBg = () => {
  return (
    <Parallax
      blur={10}
      className="image"
      bgImage={skyMountain}
      bgImageAlt="the maountain"
      strength={500}
    >
      <div className="content">
        <p className="img-txt">Text for the start</p>
      </div>
    </Parallax>
  );
};

export default imageOneBg;
