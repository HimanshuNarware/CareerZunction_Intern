import React from 'react'
import './Error.css'
import img from '../image/ErrorImg/1.jpg'

function Error() {
  return (
    <div className='errorPage' style={{width:'100vw', height:'100vh'}}>
<img  className='imgE' src={img} alt="" />
    </div>
  )
}

export default Error