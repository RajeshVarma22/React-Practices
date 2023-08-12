import React from 'react'
import { Parallax } from "react-parallax";
import rocket from "../../assets/nightSkyMountain.jpg";
import './first_parallax.css'


const ImaageTwo = () => {
  return (
    <Parallax
      // blur={10}
      className="image"
      bgImage={rocket}
      bgImageAlt="the maountain"
      strength={800}
    >
      <div className="content">
        <p className="img-txt">Text for the start</p>
      </div>
    </Parallax>
  )
}

export default ImaageTwo