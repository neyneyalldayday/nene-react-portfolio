import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

function AboutMe() {

    let Card = useRef(null);
    let textItem = useRef(null)
  
    useEffect(() => {
      console.log(Card);
     TweenMax.to(Card, .8 , { opacity: 1, y: -20, ease: Power3.easeOut} )
     TweenMax.to(textItem, .8 , { opacity: 1, y: -20, ease: Power3.easeOut, delay: .2} )
      
    }, [])
    return (
        <div className="card"  ref={el => {Card = el}} >
        <div className="card-content">
        <section ref={el => {Card = el}}>
            <p ref ={el => {textItem = el}}>A little about me, my name is Rene Trevino.</p>
            <p ref ={el => {textItem = el}}>A fullstack software developer. I come from a background of video production and editing.</p>
            <p ref ={el => {textItem = el}}>Around three years ago i got into building p.c. computers. learning the inner workings of what makes a p.c work.</p> 
            <p ref ={el => {textItem = el}}>The natural pogression was learning how to communicate with the p.c.</p>
            <p ref ={el => {textItem = el}}>So here we are.</p>
            <p ref ={el => {textItem = el}}>At the time of writing this we are on 2021's doorstep about to knock. I look forward to my new adventure in the comming year.</p>
            <p ref ={el => {textItem = el}}>Its nice to look back and see all the progress made.</p>
        </section>
     </div>   
    </div>



    )






}

// export const AboutMe = () => {
//     return (
//         <div className="card" >
//             <div className="card-content">
//             <section>
//                 <p>A little about me, my name is Rene Trevino.</p>
//                 <p>A fullstack software developer. I come from a background of video production and editing.</p>
//                 <p>Around three years ago i got into building p.c. computers. learning the inner workings of what makes a p.c work.</p> 
//                 <p>The natural pogression was learning how to communicate with the p.c.</p>
//                 <p>So here we are.</p>
//                 <p>At the time of writing this we are on 2021's doorstep about to knock. I look forward to my new adventure in the comming year.</p>
//                 <p>Its nice to look back and see all the progress made.</p>
//             </section>
//          </div>   
//         </div>
//     )

// }

export default AboutMe;