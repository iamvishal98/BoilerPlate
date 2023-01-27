import React, {useState,useRef,useEffect}from 'react';
import './Navbar.css';
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {

  const boxRef = useRef(null);
  const [show,setShow]=useState(false);

  const handleClick = () => {
    setShow(!show);
  };

let where = (event) => {

  if(boxRef.current && !boxRef.current.contains(event.target)) {
    setShow(false);
  }

};

useEffect(()=> {
  document.addEventListener('mousedown',where);

  return () =>{
    document.removeEventListener('mousedown',where);
  }
},[])

  return (
    <div className='header'>
      <div className='container'>
        <h1>Crpto<span className='primary'>FY</span></h1>
        <ul className={show ? 'nav_menu active' :'nav_menu'} ref={boxRef}>
          <li>
            <a href='#home' onClick={handleClick}>Home</a>
          </li>
          <li>
            <a href='#featured' onClick={handleClick}>Featured</a>
          </li>
          <li>
            <a href='#earn' onClick={handleClick}>Earn</a>
          </li>
          <li>
            <a href='#contact' onClick={handleClick}>Contact</a>
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