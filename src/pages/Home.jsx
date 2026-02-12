import Header from "../components/Header"
import BackGround from "../components/BackGround"
import SplitText from "../components/SplitText";

function Home() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const textAnimationProps = {
    delay: 100,
    duration: 0.9,
    ease: "power3.out",
    splitType: "chars",
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    threshold: 0.1,
    rootMargin: "-100px",
  };

  return (
    <div style={{  backgroundColor: "white" }} className="relative overflow-hidden">

      <Header />
      <BackGround />

      <div 
        style={{ fontFamily: "Playfair Display, serif" }} 
        className="relative z-10  flex flex-col mt-30 justify-center px-16 text-[#ffffff]"
      >

     

        <div className=" ">

         <div> <SplitText text="Where" className="md:text-3xl text-5xl" {...textAnimationProps} onLetterAnimationComplete={handleAnimationComplete} /></div>

<div>
            <SplitText text="aesthetics and" className="md:text-3xl text-5xl" {...textAnimationProps} />
  
</div>
<div>
            <SplitText text="functionality" className="md:text-3xl text-5xl" {...textAnimationProps} />
  
</div>
<div>
            <SplitText text="meet" className="md:text-3xl text-5xl" {...textAnimationProps} />
  
</div>
        </div>

     

      </div>
      <div className="md:mt-10 pl-9" style={{fontFamily: "Playfair Display, serif"}}>
   <SplitText
                  text="I'M AMGITH"
                  className="md:text-[250px] text-[50px] font-semibold   md:h-140 h-45 "
                  delay={100}
                  duration={0.9}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
</div>
    </div>
  
  )
}

export default Home
