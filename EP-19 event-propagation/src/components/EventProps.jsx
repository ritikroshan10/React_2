import React from 'react'

export const EventProps = () => {

const handleWelcomeUser=(user)=>{
alert (`Hey , ${user}`)
}

const handleHover=()=>{
alert (`Hey , Thanks for hovering me...`)
}



  return (
    <>  
   <WelcomeUser onClick={()=> handleWelcomeUser("Ritik")} onMouseEnter={handleHover}/>
    </>
  )
}

const WelcomeUser =(props)=>{

    const handleGretting=()=>{
        console.log("Hello");
        props.onClick();
    }
    
    return(
        <>
        <button onClick={props.onClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
        <button onClick={handleGretting}>Gretting</button>
        </>
    )
}