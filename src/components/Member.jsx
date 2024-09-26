import React from 'react'
import { BiLibrary } from "react-icons/bi";
import { IoAddCircle } from "react-icons/io5";
import { IoPricetagSharp } from "react-icons/io5";

const Member = () => {
  return (
    <div className='member-header'>
        <h1>Members get even more</h1>
        <div className='member-card'>
            <div className='member-card-list'>
                <BiLibrary size={35} style={{color:"#fff", background:"#ffa000",padding:"0.2rem", borderRadius:"5px"}}/>
                <h2>Pick 1 audiobook a month</h2>
                <p>Choose any title you want from our unmatched collection - including bestsellers and new releases. This is yours to keep.</p>
            </div>
            <div className='member-card-list'>
                <IoAddCircle size={45} style={{color:"ffa000"}}/>
                <h2>Thousands of included titles</h2>
                <p>Listen all you want to thousands of included audiobooks and Originals with celebs you love and emerging talent.</p>
            </div>
            <div className='member-card-list'>
                <IoPricetagSharp size={45} style={{color:"ffa000"}}/>
                <h2>Deals & discounts</h2>
                <p>Get in on exclusive sales and deals, and use your special member discount on any title, anytime.</p>
            </div>
        </div>
        <button className='member-button'>Start your 30-day free trial</button>
      <p>₹199 per month after 30-day trial. Cancel anytime.
      Now accepting UPI payment method.</p>
    </div>
  )
}

export default Member
