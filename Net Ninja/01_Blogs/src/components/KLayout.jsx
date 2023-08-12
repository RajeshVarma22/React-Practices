import React from 'react'
import './klcss.css'


const KLayout = () => {
  return (
    <>
      <div className='row'>
        <div className='col-1' id='line'></div>
        <div className='col-11'>
          <h1>- MULTIPLE ALERTS</h1>
          <div className='d-flex '> <p className='sideHorizon'></p> <p>LOW - LOW  -Measurement 4</p></div>
          <div className='d-flex '> <p className='sideHorizon'></p> <p>High - Inlet Pressure</p></div>
          <div className='d-flex '> <p className='sideHorizon'></p> <p>NO DATA/ERROR - Discharge pressure</p></div>
        </div>
      </div>

    </>
  )
}

export default KLayout
