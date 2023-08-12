import React, { useState } from 'react'
import './aside.css'

const AsideBar = () => {
  const [buttonClicked, setButtonClicked] = useState(false)

  return (
    <>
      {/* <div className="sidebar">
        <button className="btn sideButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <span classNameName="buttonBar">|</span><span classNameName="buttonBar">|</span><span classNameName="buttonBar">|</span>
        </button>
        <div id="sideCotent">
          contentHere
        </div>
      </div> */}


      <button className="sideButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span classNameName="buttonBar"> </span><span classNameName="buttonBar"> </span><span classNameName="buttonBar"> </span>
      </button>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <button type="button" className='sideButton2' data-bs-dismiss="offcanvas" aria-label="Close">
            <span classNameName="buttonBar">|</span><span classNameName="buttonBar">|</span><span classNameName="buttonBar">|</span>
          </button>
        </div>
        <div id='asideContent' className='offcanvas-body'>
          <div className="dropdown">
            <select name="" id="">
              <option value="Asset type extrudes">Asset Type Extrudes</option>
            </select>
          </div>
        </div>
      </div>

    </>
  )
}

export default AsideBar