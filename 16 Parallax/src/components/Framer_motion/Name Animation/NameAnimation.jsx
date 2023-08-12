import React from 'react'
import './nameAnimate.css'
import TextSpan from './TextSpan'

const NameAnimation = () => {
  const animatedSentence = `Rajesh Varma`.split("")
  return (
    <div id='NameAnimation'>
      {animatedSentence.map((letter, index) => {
        return(
          <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
        )
      })}
    </div>
  )
}

export default NameAnimation