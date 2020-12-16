import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Resume() {
    let Card = useRef(null);
   
  
    useEffect(() => {
      console.log(Card);
     TweenMax.to(Card, .8 , { opacity: 1, y: -20, ease: Power3.easeOut} )
   
      
    }, [])
    return (
        <div className="card"  ref={el => {Card = el}}>
            <div className="card-content">
            <article>
            <li  ref={el => {Card = el}} className = "nav-item" id="nav-item">
            <FontAwesomeIcon icon="skull-crossbones" />
            <Link to={{ pathname:"https://docs.google.com/document/d/1weVT8Ctucsou5P4TQ2fi1gufxnHgmeu-LBt4XxO_ldQ/edit"}} target="_blank">Resume</Link>
             </li>
            </article>
           </div> 
        </div>
    )
}

export default Resume
