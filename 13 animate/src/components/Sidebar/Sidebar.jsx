import React, { useEffect } from 'react'
import "./sidebar.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Sidebar = () => {

  useEffect(() => {
    return () => {
      Aos.init({ duration: 2000 })
    }
  }, [])

  return (
    <>
      <section className='animation' data-aos="fade-up" >
        <div>
          <h1>Heding 1</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, rem illo modi laborum quia neque sed error perspiciatis dignissimos, quod assumenda alias numquam ratione itaque, sequi ad qui tempora accusantium!</p>
        </div>
      </section>

      <section className='animation' >
        <div>
          <h1>Heding 2</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, rem illo modi laborum quia neque sed error perspiciatis dignissimos, quod assumenda alias numquam ratione itaque, sequi ad qui tempora accusantium!</p>
        </div>
      </section>

      <section className='animation' data-aos="zoom-in">
        <h1>Heding 3</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, rem illo modi laborum quia neque sed error perspiciatis dignissimos, quod assumenda alias numquam ratione itaque, sequi ad qui tempora accusantium!</p>
      </section>

      <section className='animation' data-aos="fade-down">
        <h1>Heding 4</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, rem illo modi laborum quia neque sed error perspiciatis dignissimos, quod assumenda alias numquam ratione itaque, sequi ad qui tempora accusantium!</p>
      </section>
    </>
  )
}

export default Sidebar