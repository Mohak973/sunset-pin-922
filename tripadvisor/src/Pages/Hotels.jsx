
import React from 'react'
import { useEffect,useState } from 'react';
import HotelItem from '../components/HotelItem';
import {NavLink} from "react-router-dom"
import {Button} from "@chakra-ui/react"

function Hotels() {

    const [hotels,sethotels]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/data").then((res)=>res.json()).then((res)=>{
    sethotels(res)
    
       })
    },[])
  return (
    <div style={{width:"70%",margin:"auto",textAlign:"center",justifyContent:"center"}} >
       {hotels.map((el)=>(
        <NavLink to={`/Hotels/${el.id}`}>
         <HotelItem key={el.id} {...el} />
          <Button mr="280px" color="white" backgroundColor="black" mb="20px">Book</Button>
        </NavLink>
          
       ))}

    </div>
  )
}

export default Hotels