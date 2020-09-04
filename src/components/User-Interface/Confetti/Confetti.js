import React from 'react'
import Confetti from 'react-confetti'
 
export default () => {
  const { width, height } = "100%"
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}
