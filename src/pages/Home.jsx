import Header from "../components/Header"
import BackGround from "../components/BackGround"
import { IoIosArrowRoundForward } from "react-icons/io";
import TextEffect from "../components/TextEffect";

// import React from 'react'



function Home() {
  return (
    <div>
      <div style={{ height: "100vh", backgroundColor: "white" }} >
        <Header />
        <BackGround />
        <div className="text text-white" style={{ zindex: "1", position: "relative", padding: "50px", paddingTop: "150px", lineHeight: "0.1px" }}>
          <TextEffect />
          <h6 style={{ fontSize: "12px" }} className="lower-text fw-light text-center mt-5">super dan</h6>
        </div>
      </div>
    </div>

  )
}

export default Home