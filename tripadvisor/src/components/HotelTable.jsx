import React from 'react'
import { useEffect,useState } from 'react';
import HotelItem from './HotelItem';

function HotelTable() {
    const [hotels,sethotels]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/data").then((res)=>res.json()).then((res)=>{
    sethotels(res)
    
       })
    },[])
    console.log(hotels)
  return (
    
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",marginBottom:"30px",marginTop:"50px",}}>
     {hotels?.map((hotel)=>(
        <HotelItem 
       key={hotel.Title}  {...hotel}/>
     ))}
    </div>
  )
}

export default HotelTable