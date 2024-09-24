import React from 'react'

const Listing = ({title, description, data}) => {
    console.log(data)
  return (
    <div>
        <div className='album-listing'>
            <h1>
                {title}
            </h1>
            <p>{description}</p>
        </div>
        <div className='head-booklisting invisible-scrollbar'>
           { data.map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt="" />
                    <p style={{fontWeight:'600'}}>{item.name}</p>
                    <p style={{color:'gray'}}>Written By: <span>{item.writtenBy}</span></p>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Listing;
