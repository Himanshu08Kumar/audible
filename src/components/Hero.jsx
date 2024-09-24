import React from 'react'
import poster1 from '../assets/poster1.jpg'
import poster2 from '../assets/poster2.jpg'
import poster3 from '../assets/poster3.jpg'
import poster4 from '../assets/poster4.jpg'
import poster5 from '../assets/poster5.jpg'
import poster6 from '../assets/poster6.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1>Get your imagination going</h1>
            <p className='subText'>The best audiobooks. The most entertainment. The podcasts you want to hear.</p>
            <button>Start your 30-day free trial</button>
            <p className='info-Text'>₹199 per month after 30-day trial. Cancel anytime.
            Now accepting UPI payment method.</p>
        </div>
        <div className="hero-right">
            <img src={poster1} alt="" />
            <img src={poster2} alt="" />
            <img src={poster3} alt="" />
            <img src={poster4} alt="" />
            <img src={poster5} alt="" />
            <img src={poster6} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
