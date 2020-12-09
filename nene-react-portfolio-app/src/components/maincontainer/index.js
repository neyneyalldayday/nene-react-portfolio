import React, { Component } from "react";
import Nene from "../nene"
import Title from "../title"
import Name from "../name"
import Chips from "../chips"
import Navbar from "../navbar"



class MainContainer extends Component {
render(){
    return ( 
        <div className = "App">
        <Navbar />
        <main>
            <Title />
            <Name />
            <Nene />
            <Chips />
        </main>
          </div>
    )
}
}

export default MainContainer;