import React from 'react'
import {useState,useEffect} from "react"
import Restaurantcard from './Restaurantcard';
import {Link} from "react-router-dom"
function RestaurantTable() {

    const [data,setdata]=useState([]);


    useEffect(()=>{
   fetch("http://localhost:8080/res")
   .then((res)=>res.json())
   .then((res)=>{
    setdata(res)
   })
    },[])
  return (
    <div style={{width:"90%",margin:"auto"}}>
    {data.map((el)=>(
        <Link _hover="none" to={`/Restaurant/${el.id}`}>
        <Restaurantcard key={el.name} {...el}/>
        </Link>
        
    ))}
    </div>
  )
}

export default RestaurantTable