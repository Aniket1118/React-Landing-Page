import React from 'react'

function About(props) {
  return (
    <div id="about" >
        <div className='about-image'>
            <img src={props.image} alt ="#" />
        </div>
        <div className='about-text'>
            <h2>{}</h2>
            <p>lorem ispum order  doller  orem ispum orderlorem ispum order  doller  orem ispum orderlorem ispum order  doller  orem ispum orderlorem ispum order  doller  orem ispum orderlorem ispum order  doller  orem ispum order</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About