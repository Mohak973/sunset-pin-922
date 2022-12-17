import {HStack,Box,Image,Text,Link, Spacer,Button, useDisclosure,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input} from "@chakra-ui/react";
  

import React from 'react'
import { useState } from "react";
import {Navigate} from "react-router-dom"

function Navbar() {

  const {isOpen,onOpen,onClose,} =useDisclosure();
  const {x,y,z}=useDisclosure()
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("")

  const isError = email && password === ''

  const handlejoin=()=>{
    <Navigate to="../Pages/Signup" />
    console.log("m")
  }
  return (
    <div style={{marginLeft:"70px",marginRight:"70px",marginTop:"100px",marginBottom:"50px"}}>
      <HStack  h="100px" spacing="460px">
  <Box >
  <Image boxSize="200px" height="100px" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"></Image>
  </Box>
 
  <Box  display="flex" >
  
      <Box Spacing="20px" >
        <Link display="flex" _hover="none">
        <Image boxSize="25px" src="https://img.icons8.com/material-outlined/512/edit.png"></Image>
        <Text pl="5px" pr="20px" fontSize="17px" fontStyle="normal" fontWeight="400">Review</Text>
        </Link>
        
      </Box>
      <Box Spacing="20px" >
        <Link display="flex" _hover="none">
        <Image boxSize="25px" src="https://img.icons8.com/ios/512/hearts.png"></Image>
        <Text pl="5px" pr="20px" fontSize="17px" fontStyle="normal" fontWeight="400">Trips</Text>
        </Link>
        
      </Box>
      <Box Spacing="20px" >
        <Link display="flex" _hover="none" >
        <Image boxSize="25px" src="https://img.icons8.com/material-outlined/512/filled-appointment-reminders.png"></Image>
        <Text pl="5px" pr="20px" fontSize="17px" fontStyle="normal" fontWeight="400">Alert</Text>
        </Link>
        
      </Box>
      <Box>
       
      <Button onClick={onOpen}>Sign in</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
      <Image  boxSize="200px" height="100px" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"></Image>
      <Text>Sign in to unlock the best of Tripadvisor.</Text>
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={email} onChange={(e)=>setemail(e.target.value)} />
      {!isError ? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
 <FormLabel>Password</FormLabel>
<Input type='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
<Button mt="20px" mr="20px" bg="black" color="white" _hover="none">Sign in</Button>


    </FormControl>
    </ModalBody>

   


   

    <ModalFooter>
      <Text>Not a Member ?</Text>
     <Link href="/Signup" _hover="none">Join</Link>
      <Button ml="20px" colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
     
    </ModalFooter>
  </ModalContent>
</Modal>
     

      </Box>
      <Box Spacing="20px" ml="10px">
        <Link display="flex"  _hover="none">
        <Image pl="1px" boxSize="25px" src="https://img.icons8.com/material-outlined/512/shopping-cart.png"></Image>
        <Text pl="5px" pr="5px" fontSize="17px" fontStyle="normal" fontWeight="400">Basket</Text>
        </Link>
        
      </Box>
    
  </Box>
</HStack>
    </div>
  )
}

export default Navbar
