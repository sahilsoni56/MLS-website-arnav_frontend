import React from 'react'
import AnimatedCursor from "react-animated-cursor"
function Animatedcursor() {
  return (
    <AnimatedCursor
    innerSize={10}
    outerSize={30}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    trailingSpeed={6}
    hasBlendMode={true}
    innerStyle={{
      backgroundColor: 'var(--cursor-color)'
    }}
    outerStyle={{
      border: '3px solid var(--cursor-color)',
    }}
    showSystemCursor={false}
  />
  )
}

export default Animatedcursor