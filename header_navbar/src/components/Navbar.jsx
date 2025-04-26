import React, { useRef } from 'react';
import Logo from "../assets/images/logo.png"

const Navbar = () => {

  const searchRef = useRef();

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
  }

  return (
    <>
      <header className='header'>
        <a href="#" className='logo'>
          <img src={Logo} alt="" />
        </a>

        <nav className='navbar'>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div className='icons'>
          <div className='fas fa-search' onClick={searchHandler}></div>
          <div className='fas fa-shopping-cart'></div>
          <div className='fas fa-bars' id='menu-btn'></div>
        </div>
        <div className='search-form' ref={searchRef}>
          <input type="search" name="" id="search-box" placeholder='Search here.....' />
          <label htmlFor="search-box" className='fas fa-search'></label>
        </div>
      </header>
    </>
  )
}

export default Navbar