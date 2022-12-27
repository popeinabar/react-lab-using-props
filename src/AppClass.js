import { Component } from "react";
import "./App.css"
// impo/rt elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  

  // code here
  render(){
    return(
      <div className='div1'> 
       <h1>Kalvium Gallary</h1>
       <div className='img'> 
       {this.data.map((alt)=>{
        return <img src={alt.img} alt=""/> 
       })} </div>
       </div>
    )
  }
}
