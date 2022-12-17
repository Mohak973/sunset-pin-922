import React from 'react'
import { useEffect,useState } from 'react';
import HotelItem from './HotelItem';
const gethotels=()=>{
  return  ;
}
function HotelTable() {
    const [hotels,sethotels]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/data/?page=1&_limit=8").then((res)=>res.json()).then((res)=>{
    sethotels(res)
    
       })
    },[])
    console.log(hotels)
  return (
    
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
     {hotels?.map((hotel)=>(
        <HotelItem 
       key={hotel.Title}  {...hotel}/>
     ))}
    </div>
  )
}

export default HotelTable