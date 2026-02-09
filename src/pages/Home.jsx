import Header from "../components/Header"
import BackGround from "../components/BackGround"
import TextEffect from "../components/TextEffect";
import CardGradient from "../components/CardGradient";
import SplitText from "../components/SplitText";


// import React from 'react'



function Home() {

  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const commonProps = {
  delay: 50,
  duration: 1.25,
  ease: "power3.out",
  splitType: "chars",
  from: { opacity: 0, y: 40 },
  to: { opacity: 1, y: 0 },
  threshold: 0.1,
  rootMargin: "-100px",
};

  return (
    <div>
      <div style={{ height: "300vh", backgroundColor: "white" }} >
  
        <Header />
        <BackGround />
  <div className="relative z-10 text-white flex flex-col px-12 pt-36 items-start">

  <SplitText
    text="We choose a !"
    className="md:text-6xl text-4xl font-semibold tracking-widest mb-0"
    {...commonProps}
  />

  <SplitText
    text="Different →"
    className="md:text-6xl text-4xl font-semibold tracking-widest leading-tight mb-0"
    {...commonProps}
  />

  <SplitText
    text="Starting point"
    className="md:text-6xl text-4xl font-semibold tracking-widest leading-tight mb-6"
    {...commonProps}
  />

  <SplitText
    text="We are a brand of collective creativity"
    className="text-xs tracking-widest opacity-70"
    {...commonProps}
  />

</div>







     
       
   
      </div>

    </div>

  )
}

export default Home