// import { Component } from 'react';
import './App.css';



function App(props) {
  console.log(props)
  return(
    <div className='div1'> 
     <h1>Kalvium Gallary</h1>
     <div className='img'> 
     {props.data.map((alt)=>{
      return <img src={alt.img} alt=""/> 
     })} </div>
     </div>
  )
}

export default App;
