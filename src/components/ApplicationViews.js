import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./location/LocationCard"
import { CustomerCard } from "./customer/CustomerCard"
import { EmployeeCard } from "./employee/EmployeeCard"

export const ApplicationViews = () => {
    return (
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home/>}/>
                
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals" element={<AnimalCard />}/>
           
            <Route path="/customers" element={<CustomerCard />}/>

            <Route path="/locations" element={<LocationCard />}/>

            <Route path="/employees" element={<EmployeeCard />}/>

        </Routes>
    )
}


