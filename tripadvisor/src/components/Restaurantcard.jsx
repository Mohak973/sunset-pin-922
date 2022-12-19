import React from 'react'

function Restaurantcard({image,name,address}) {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"80px"}}>
        
        <img src={image}></img>
       
        <div>
        <h3>{name}</h3>
     <p>{address}</p>
        </div>
       
    </div>
  )
}

export default Restaurantcard