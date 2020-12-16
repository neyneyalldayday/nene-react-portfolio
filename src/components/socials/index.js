import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Socials() {

    let Card = useRef(null);
   
  
    useEffect(() => {
      console.log(Card);
     TweenMax.to(Card, .8 , { opacity: 1, y: -20, ease: Power3.easeOut} )
   
      
    }, [])
    return (
        <div class="card"ref={el => {Card = el}}>
            <div className="card-content" >
            <section  >
            <li  ref={el => {Card = el}} className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="caravan" />
            <Link  to={{ pathname:"https://www.linkedin.com/in/rene-trevino-236058169/"}} target="_blank">Linkedin</Link>                    
            
            </li>
            <li ref={el => {Card = el}} className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="biohazard" />
            <Link to={{ pathname:"https://github.com/neyneyalldayday"}} target="_blank">GitHub</Link>                   
            
            </li>
            <li ref={el => {Card = el}} className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="glass-cheers" />
            <Link to={{ pathname:"https://wwww.drfrankenstein123@gmail.com"}} target="_blank">Email</Link>         
           
            </li>             
               
                    
            </section>
         </div>   
            
        </div>
    )
}

export default Socials
