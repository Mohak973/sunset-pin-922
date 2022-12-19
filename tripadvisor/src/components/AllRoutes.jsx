import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Hotels from '../Pages/Hotels'
import Restaurant from '../Pages/Restaurant'
import Signup from '../Pages/Signup'
import Singlehotel from '../Pages/Singlehotel'
import Singlerestaurant from '../Pages/singlerestaurant'
import Booking from '../Pages/Booking'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
             <Route path="/Restaurant" element={<Restaurant />}></Route>
             <Route path="/Restaurant/:id" element={<Singlerestaurant />}></Route>
             <Route path="/Hotels" element={<Hotels />}></Route>
             <Route path="/Hotels/:id" element={<Singlehotel />}></Route>
             <Route path="/Booking" element={<Booking />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes