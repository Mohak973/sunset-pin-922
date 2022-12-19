import React from 'react'
import { useParams,useNavigate } from "react-router-dom";

import { useEffect, useState,useContext } from "react";
import {Button,Text,Image} from "@chakra-ui/react"
import { AuthContext } from '../Contexts/AuthContext';

function Singlehotel() {
    const {id} =useParams();
    const [detail,setdetail]=useState({})
    const {isAuth}=useContext(AuthContext)
    const navigate=useNavigate()
   useEffect(()=>{
     fetch(`http://localhost:8080/data/${id}`)
     .then((res)=>res.json())
     .then((res)=>{
    setdetail(res)
     })
   },[id])

   const handlebook=()=>{
    if(isAuth){
       navigate("/Booking")
    }else{
        alert("Login First")
        navigate("/")
    }
   }

   const {image,Title,price,Reviews}=detail
  return (
    <div style={{width:"100%",justifyItems:"center"}}>
        <Text>{Title}</Text>
         <Image src={image} ml="370px"></Image>
        <Text>{price}</Text>
        <Text maxW="800px" ml="200px" mt="40px">{Reviews}</Text>
        <Button color="white" backgroundColor="black" onClick={handlebook}>Book</Button>
    </div>
  )
}

export default Singlehotel