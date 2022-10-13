import Image from 'next/image'
import React from 'react'
// import { RiMenu3Line,RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='gpt3_navbar'>
    <div className='gpt3_navbar_links'>
      <div className='gpt3_navbar_logo'>
      <img src="https://i.ibb.co/sjNHMdV/logo.png" alt="logo" border="0" />
      </div>
      <div className='gpt3_navbar_links_container' style={{color:"#fff"}}>
       <a href='' style={{color:"white",textDecoration:"none"}}>Home</a>
       <p><a href='' style={{color:"white",textDecoration:"none"}}>What is GPT</a></p>
       <p><a href='' style={{color:"white",textDecoration:"none"}}>Open AI</a></p>
       <p><a href='' style={{color:"white",textDecoration:"none"}}>Case Studies</a></p>
       <p><a href='' style={{color:"white",textDecoration:"none"}}> Library</a></p>
      </div>
    </div>
    <div className="gpt3_navbar_links_sign button">
    <p style={{color:"#fff",margin:"1rem",cursor:"pointer"}} >Sign in</p>
    <button type="button">Sign up</button>
  </div>
      
    </div>
  )
}

export default Navbar