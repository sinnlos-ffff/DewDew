import React, { PropsWithChildren, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

function GlassPickboard() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/daily_pick')
  }

  return (
    <div className="glassboard">
      <p>You want to listen to someone who...</p>
      <button className="glassbutton" onClick={handleClick}>
        Released new music
      </button>
    </div>
  )
}

export default GlassPickboard
