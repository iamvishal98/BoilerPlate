import React from 'react';
import './Hero.css';
import heroBg from '../../assets/hero.jpg';

const Hero = () => {
  return (
    <div className="hero" id='home'>
        <div className="container">
            <div className="left">
                <p>Buy $ Sell Cyrpto 24/7 seemlessly</p>
                <h1>Invest in Cryptocurrency using UPI</h1>
                <p>Hundreds of Cryptocurrencies to choose from</p>
                <div className="input_container">
                    <input type='email' placeholder='Your email' />
                    <button className='btn'>Learn more</button> 
                </div>
            </div>
            <div className="right">
                <div className="image_container">
                    <img src={heroBg} alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero