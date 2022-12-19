import React from 'react'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Navigate,useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import { useContext } from 'react';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [form,setform]=useState({first:"",last:"",email:"",password:""});
  const {isAuth,setAuth}=useContext(AuthContext)

  const handlechange=(e)=>{
    setform({...form,[e.target.id]:e.target.value})
  }
  const navigate=useNavigate();
  
  const nav=()=>{
    navigate("/")
   }
 const handlesignup=()=>{
 let  newobj ={Email:form.email,Password:form.password};

 fetch("http://localhost:8080/cred",{
  method:"POST",
  headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify(newobj)
 });
     
 nav()

 }

 
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel >First Name</FormLabel>
                  <Input value={form.first} id="first" type="text"  onChange={handlechange}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input value={form.last} id="last" type="text" onChange={handlechange}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input value={form.email} id="email" type="email" onChange={handlechange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input id="password" value={form.password} type={showPassword ? 'text' : 'password'} onChange={handlechange} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
               onClick={handlesignup}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}