import React from "react";
import SplitText from "./SplitText";
import { IoIosArrowRoundForward } from "react-icons/io";


function TextEffect() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const lines = [
    { text: "Super Dan", className: "text-left text-xs mb-3" },
    { text: "We choose a ", className: "md:text-6xl text-4xl font-semibold text-center mb-0  tracking-widest" },
    { text:  "Different →",className: "md:text-6xl text-4xl  font-semibold text-center mb-1  tracking-widest" },
    { text: "Starting point", className: "md:text-6xl text-4xl  font-semibold text-center mb-3 tracking-widest" },
    { text: "We are a brand", className: "text-left text-xs mb-0" },
    { text: "of collective", className: "text-left text-xs mb-0 " },
    { text: "creativity", className: "text-left text-xs mb-0 " },

  ];

  return (
    <div style={{ fontFamily: "'Satoshi', sans-serif" }} >
      {lines.map((line, index) => (
        <div key={index} className="block w-full ">   
          <SplitText
                    text={line.text}
            className={line.className}
            delay={0.1 * index}       
            duration={1}                
            ease="power2.out"            
            splitType="chars"
            stagger={0.05}                
            from={{ opacity: 0, y: 30 }}  
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            onLetterAnimationComplete={handleAnimationComplete}

          />
        </div>
      ))}
    </div>
  );
}

export default TextEffect;
