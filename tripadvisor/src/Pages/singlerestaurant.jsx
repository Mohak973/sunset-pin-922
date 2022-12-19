import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import React from 'react'

function Singlerestaurant() {
    const {id} =useParams();
    const [detail,setdetail]=useState({})
   useEffect(()=>{
     fetch(`http://localhost:8080/res/${id}`)
     .then((res)=>res.json())
     .then((res)=>{
    setdetail(res)
     })
   },[id])

   console.log(detail)

   const {image,name,address,review_count}=detail
  return (
    <div>
   <h1>{name}</h1>
   <img src={image}></img>
   <h3>{address}</h3>
   <p>Reviews:{review_count}</p>
    </div>
  )
}

export default Singlerestaurant