import React from 'react'
import { useState } from 'react';




const SlotM=(props)=>{
  // let x='😄';
  // let y='😄';  
  // let z='🎅';
  let {x,y,z}=props;

  if((x===y) && (y===z)){
    return(
      <>
      <h1>{x}{y}{z}</h1>
      <h1>This Is Matching</h1>
      </>
    );
  }else
  {
    return(
      <>
      <h1>{x}{y}{z}</h1>
      <h1>This Is Not Matching</h1>
      </>
    );
  }
}
export default function Game() {
  const [count,setcount]=useState(0);
  const IncNum=()=>{
    setcount(count +1);
  }

  return (
    <>
    <h1>🎰 Welcome to Slot machine</h1>
    <SlotM x='😄' y='😄' z='😄'/>
    <SlotM  x='😄' y='🎅' z='😄'/>
    <SlotM  x='🎅' y='😄' z='😄'/>
    <SlotM x='😄' y='😄' z='😄'/>

<h1>{count}</h1>
<button onClick={IncNum}>Click</button>
    
</>
  )
}
