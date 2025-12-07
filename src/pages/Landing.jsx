import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      gsap.to(card, {
        y: 220,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      {/* === ROW 1 === */}
      <div
        style={{
          display: "flex",
          gap: "90px",
          justifyContent: "between",
          marginBottom: "200px",
        }}
      >
        <div>
          <img
            ref={addCardRef}
            src="https://i.pinimg.com/736x/5b/a5/77/5ba5772cfcb3d8fdfdd7394f8456a97e.jpg"
            style={{ width: "500px", borderRadius: "" }}
          />
        </div>

        <div>
          <img
            ref={addCardRef}
            src="https://i.pinimg.com/736x/5b/a5/77/5ba5772cfcb3d8fdfdd7394f8456a97e.jpg"
            style={{ width: "500px", borderRadius: "",marginTop:"100px"}}
          />
          
        </div>
      </div>

      {/* === ROW 2 === */}
     
       <div
        style={{
          display: "flex",
          gap: "90px",
          justifyContent: "between",
          marginBottom: "200px",
        }}
      >
        <div>
          <img
            ref={addCardRef}
            src="https://i.pinimg.com/736x/5b/a5/77/5ba5772cfcb3d8fdfdd7394f8456a97e.jpg"
            style={{ width: "500px", borderRadius: "" }}
          />
       
        </div>

        <div>
          <img
            ref={addCardRef}
            src="https://i.pinimg.com/736x/5b/a5/77/5ba5772cfcb3d8fdfdd7394f8456a97e.jpg"
            style={{width: "500px", borderRadius: "",marginTop:"100px"}}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Landing;
