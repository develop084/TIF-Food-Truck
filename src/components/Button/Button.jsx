import React from 'react'
import './stylesButton.css'
function Button({isHollow, text}) {
  return (
    <>
    {
      isHollow ? <span className='hollow-button'>{text}</span> : <span className='filled-button'>{text}</span> 
    }
    
    </>
  )
}

export default Button