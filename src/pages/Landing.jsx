// import React from 'react'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Landing() {
      const bgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const txt = textRef.current;

    // Background slow movement + zoom
    gsap.to(bg, {
      y: 150,        // slow downward motion
      scale: 1.2,    // Netflix style slight zoom
      ease: "none",
      scrollTrigger: {
        trigger: bg,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Text fade in & move up
    gsap.fromTo(
      txt,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: txt,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (

 <div style={{ height: "200vh", width: "100%", background: "#000" }}>
      {/* HERO SECTION */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Background Layer */}
        <img
          ref={bgRef}
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=60"
          alt="bg"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* Foreground Text */}
        <div
          ref={textRef}
          style={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            color: "white",
            zIndex: 10,
          }}
        >
          <h1 style={{ fontSize: "4rem", margin: 0 }}>
            Unlimited Movies, TV Shows and More
          </h1>
          <p style={{ fontSize: "1.5rem" }}>
            Watch anywhere. Cancel anytime.
          </p>
        </div>
      </div>

      {/* CONTENT BELOW TO SEE PARALLAX */}
      {/* <div style={{ padding: "150px 20px", color: "white", textAlign: "center" }}>
        <h2>Scroll down to see the effect 😎</h2>
      </div> */}
    </div>

  )
}

export default Landing