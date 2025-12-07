import React from 'react'
import GradualBlur from './GradualBlur';

function CardGradient() {
  return (
    <div>
      <section style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
        <div style={{ height: '100%', overflowY: 'auto', padding: '6rem 2rem' }}>
          
          {/* Centered + Resized Image */}
          <img 
            src="https://i.pinimg.com/736x/5b/a5/77/5ba5772cfcb3d8fdfdd7394f8456a97e.jpg"
            alt="no img"
            style={{
              display: "block",
              margin: "0 auto",
              width: "500px",     // change size here
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />

        </div>

        <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </section>
    </div>
  )
}

export default CardGradient
