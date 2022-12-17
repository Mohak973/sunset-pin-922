import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Signup from '../Pages/Signup'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes