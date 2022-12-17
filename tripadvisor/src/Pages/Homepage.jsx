import React from 'react'
import {HStack,Button,ButtonGroup,Text,Image,Box,SimpleGrid} from "@chakra-ui/react"
import HotelTable from '../components/HotelTable'

function Homepage() {
  return (
    <div style={{marginLeft:"70px",marginRight:"70px",justifyItems:"center",}}>
      <HStack>
        <ButtonGroup variant="outline" spacing="20px" ml="0px">
            <Button display="flex" pl="40px" pr="40px" pt="10px" pb="10px">
                <Text mr="30px">Hotels</Text>
                <Image boxSize="20px" src="https://img.icons8.com/ios/512/bedroom.png"></Image>
            </Button>
            <Button  pl="35px" pr="35px"  pt="10px" pb="10px">
            <Text mr="30px">Hotels</Text>
                <Image boxSize="20px" src="https://img.icons8.com/ios/512/country-house.png"></Image>
            </Button>
            <Button   pl="35px" pr="35px"  pt="10px" pb="10px">
            <Text mr="30px">Hotels</Text>
                <Image boxSize="20px" src="https://img.icons8.com/ios/512/bedroom.png"></Image>
            </Button>
            <Button  pl="35px" pr="35px"  pt="10px" pb="10px">
            <Text mr="30px">Hotels</Text>
                <Image boxSize="20px" src="https://img.icons8.com/sf-ultralight-filled/512/cutlery.png"></Image>
            </Button>
            <Button  pl="35px" pr="35px"  pt="10px" pb="10px">
            <Text mr="30px">Travels</Text>
                <Image boxSize="20px" src="https://img.icons8.com/sf-ultralight-filled/512/airport.png"></Image>
            </Button>
            <Button   pl="35px" pr="35px"  pt="10px" pb="10px">
            <Text mr="30px">More</Text>
                <Image boxSize="20px" src="https://img.icons8.com/sf-ultralight-filled/512/more.png"></Image>
            </Button>
        </ButtonGroup>
      </HStack>
      <Box mt="50px">
        <Image src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans@2x.webp"></Image>
      </Box>
      <Box mt="30px">
        <Text textAlign="left">Ways to tour Lucknow</Text>
        <Text textAlign="left">Book these experiences for a close-up look at Lucknow.</Text>
      </Box>
    <Box>
     <HotelTable />
    </Box>
    </div>
  )
}

export default Homepage;