import Header from "../components/Header"
import BackGround from "../components/BackGround"
import TextEffect from "../components/TextEffect";
import Landing from "./Landing";
import CardGradient from "../components/CardGradient";


// import React from 'react'



function Home() {
  return (
    <div>
      <div style={{ height: "500vh", backgroundColor: "white" }} >
        <Header />
        <BackGround />
        <div className="text text-white" style={{ zindex: "1", position: "relative", padding: "50px", paddingTop: "150px", lineHeight: "0.1px" }}>
          <TextEffect />
          <h6 style={{ fontSize: "12px" }} className="lower-text fw-light text-center mt-5">super dan</h6>
        </div>



{/* <div className="container"> */}
    <div className="row text-center">
  <div className="col-md-2">
   <div>
            <p style={{ fontSize: "12px",marginTop:"100px" }} className="lower-text fw-light text-left ms-5 ">super dan</p>
           <p style={{ fontSize: "12px",marginTop:"" }} className="lower-text fw-light text-left ms-5 ">super dannn</p>
        <p style={{ fontSize: "12px",marginTop:"" }} className="lower-text fw-light text-left ms-5 ">super dannnnn</p>
           <p style={{ fontSize: "12px",marginTop:"" }} className="lower-text fw-light text-left ms-5 ">super dannnn</p>
        <p style={{ fontSize: "12px",marginTop:"" }} className="lower-text fw-light text-left ms-5 ">super dannnn</p>
           <p style={{ fontSize: "12px",marginTop:"" }} className="lower-text fw-light text-left ms-5 ">super dan</p>
  
          </div>
  </div>
  <div className="col-md-10  ">
               <Landing/>

  </div>
            
          </div>

{/* </div> */}

     
       
   
      </div>

    </div>

  )
}

export default Home