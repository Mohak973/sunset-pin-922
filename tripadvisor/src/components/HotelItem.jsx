import React from 'react'
import { NavLink } from "react-router-dom"
function HotelItem({image,Title,price}) {
  
  return (
   
    <div style={{width:"90%"}}>
     <NavLink to="/Hotels">
     <img src={image} style={{marginBottom:"40px"}}></img>
     <h3 >{Title}</h3>
     <p >{price}</p>
     </NavLink>
     
     
    
      
  
    </div>
  
   
  )
}

export default HotelItem