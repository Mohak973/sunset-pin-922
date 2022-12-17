import React from 'react'

function HotelItem({image,Title,price}) {
  return (
    <div>
       <img src={image} alt={Title}></img>
        <h3>{Title}</h3>
        <p>{price}</p>
    </div>
  )
}

export default HotelItem