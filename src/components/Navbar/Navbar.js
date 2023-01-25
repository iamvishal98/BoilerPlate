import React, {useState}from 'react';
import './Navbar.css';
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {

  const [show,setShow]=useState(false);
  const handleClick = () => {
    setShow(!show);
  }



  return (
    <div className='header'>
      <div className='container'>
        <h1>Crpto<span className='primary'>FY</span></h1>
        <ul className={show ? 'nav_menu active' :'nav_menu'}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='#featured'>Featured</a>
          </li>
          <li>
            <a href='#earn'>Earn</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className="btn_group">
          <button className='btn'>Wallet</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {show ? (<FaTimes size={20} style={{color:'#444'}}/>) :
                  (<FaBars size={20} style={{color:'#444'}}/>) }
        </div>
      </div>
    </div>
  )
}

export default Navbar