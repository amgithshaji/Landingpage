import Header from "../components/Header"
import BackGround from "../components/BackGround"
import SplitText from "../components/SplitText";

function Home() {
  const textAnimationProps = {
    delay: 40,
    duration: 0.7,
    ease: "power4.out",
    splitType: "chars",
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#f0f0f0] overflow-hidden">
      {/* Background with a subtle overlay for readability */}
      <div className="absolute inset-0 z-0">
        <BackGround />
        {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div> */}
      </div>

      <Header />

      <main className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-20">
        
        {/* The Technical Philosophy */}
        {/* <div className="max-w-3xl mb-12 mt-19">
          <p className="text-xs uppercase tracking-[0.5em] text-blue-400 mb-6 font-mono">
            // Full Stack Engineering
          </p>
          <div style={{ fontFamily: "Playfair Display, serif" }} className="space-y-2">
             <SplitText text="Engineering scalable" className="text-4xl md:text-6xl font-light italic" {...textAnimationProps} />
             <div className="flex items-center gap-6">
                <SplitText text="ecosystems" className="text-4xl md:text-6xl font-bold" {...textAnimationProps} />
                <span className="h-[1px] flex-grow bg-white/20"></span>
             </div>
             <SplitText text="with modern stacks." className="text-4xl md:text-6xl font-light italic" {...textAnimationProps} />
          </div>
        </div> */}

        {/* The Big Statement (Your Name) */}
     <div className="relative group mt-80">
  {/* The blue accent line stays as a nice pop of color */}
  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-1 h-32 bg-blue-500 hidden md:block"></div>
  
  <h1 className="leading-none tracking-tighter">
    <SplitText
      text="AMGITH"
      className="text-[21vw] md:text-[18vw] font-black text-white opacity-90 transition-all duration-700 group-hover:tracking-widest"
      delay={50}
      duration={1.25}
ease="power3.out"
      splitType="chars"
     from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}

    />
  </h1>
</div>

        {/* The Tech Stack Footer */}
        <div className="absolute bottom-12 right-6 md:right-20 text-right">
          <div className="flex gap-4 text-[10px] md:text-xs font-mono tracking-widest text-gray uppercase">

             <span>MongoDB</span>
             <span>•</span>
             <span>Express</span>
             <span>•</span>
             <span>React / Angular</span>
             <span>•</span>
             <span>Node</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home