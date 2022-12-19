import React from 'react'
import {Input,Button} from "@chakra-ui/react"
import {Navigate, useNavigate} from "react-router-dom"




const  Booking=()=> {
    const navigate=useNavigate();


    const handlecart=()=>{
        navigate("/")
    }
  return (
    <div style={{width:"70%",margin:"auto"}}>
  <Input isRequired="true" type="text" placeholder='Name' mb="15px"></Input>
  <Input type="email" placeholder='Email'  mb="15px"></Input>
  <Input type="number" placeholder='Mobile Number'  mb="15px"></Input>
  <div style={{display:"grid"}}>
  <label>From</label>
  <Input type="date"  mb="15px"></Input>
  <label>To</label>
  <Input type="date"  mb="15px"></Input>
  </div>
  <Button onClick={handlecart}  mb="15px" color="white" backgroundColor="black">Book</Button>
 
    </div>
  )
}

export default Booking