import Aos from 'aos'
import React, { useEffect, useRef } from 'react'
import 'animate.css'

const Home = () => {

  useEffect(() => {
    return () => {
      Aos.init({ duration: 2000 })
    }
  }, [])

  

  return (
    <div>
      <section className='animation' data-aos="fade-up" >
        <h1>Heading 1</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, rem illo modi laborum quia neque sed error perspiciatis dignissimos, quod assumenda alias numquam ratione itaque, sequi ad qui tempora accusantium!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, rem illo modi laborum quia neque sed error perspiciatis dignissimos, quod assumenda alias numquam ratione itaque, sequi ad qui tempora accusantium!</p>
      </section>

      <section className='animation' data-aos="flip-right">
        <h1>Heading 2</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, rem illo modi laborum quia neque sed error perspiciatis dignissimos, quod assumenda alias numquam ratione itaque, sequi ad qui tempora accusantium!</p>
      </section>

      <section className='animation' data-aos="flip-left">
        <h1>Heading 3</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, rem illo modi laborum quia neque sed error perspiciatis dignissimos, quod assumenda alias numquam ratione itaque, sequi ad qui tempora accusantium!</p>
      </section>

      <section className='animation' data-aos="fade-down">
        <h1>Heading 4</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, rem illo modi laborum quia neque sed error perspiciatis dignissimos, quod assumenda alias numquam ratione itaque, sequi ad qui tempora accusantium!</p>
      </section>

      <section className='animation' data-aos="fade-down">
        <h1>Heading 4</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, rem illo modi laborum quia neque sed error perspiciatis dignissimos, quod assumenda alias numquam ratione itaque, sequi ad qui tempora accusantium!</p>
      </section>
    </div>
  )
}

export default Home