import React from 'react'
import LiquidEther from './LiquidEther';
function BackGround() {
  return (
    <div>
        <div style={{ width: '100%', height: 500, position: 'absolute',backgroundColor:"black" }}>
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={200}
    isViscous={false}
    viscous={100}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={8}
    takeoverDuration={0.25}
    autoResumeDelay={1000}
    autoRampDuration={0.9}
  />
</div>
    </div>
  )
}

export default BackGround