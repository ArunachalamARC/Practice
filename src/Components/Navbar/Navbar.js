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
      <div className='gpt3_navbar_links_container'>
       <p><a href=''>Home</a></p>
       <p><a href=''>What is GPT</a></p>
       <p><a href=''>Open AI</a></p>
       <p><a href=''>Case Studies</a></p>
       <p><a href=''> Library</a></p>
      </div>
    </div>
    <div className="gpt3_navbar_links_sign button">
    <p>Sign in</p>
    <button type="button">Sign up</button>
  </div>
      
    </div>
  )
}

export default Navbar