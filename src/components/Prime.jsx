import React from 'react'
import prime from '../assets/prime_logo.svg'

const Prime = () => {
  return (
    <div className='prime-body'>
      <img src={prime} alt="Prime Logo" />
      <div>
        <h3>Special Prime offer</h3>
        <p>Amazon Prime members pick 2 free titles with their first Audible trial. Terms apply.</p>
      </div>
    </div>
  )
}

export default Prime
