import React from "react";
import { Parallax } from "react-parallax";
import astronut from "../../assets/astronut.jpg";
import './first_parallax.css'

const ImageThree = () => {
  return (
    <Parallax
      // blur={5}
      className="image"
      bgImage={astronut}
      bgImageAlt="the maountain"
      strength={500}
    >
      <div className="content">
        <p className="img-txt">Text for the start</p>
      </div>
    </Parallax>
  );
};

export default ImageThree;
