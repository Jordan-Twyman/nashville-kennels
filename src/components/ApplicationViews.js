import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetails"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalSearch } from "./animal/AnimalSearch"



export const ApplicationViews = () => {
    return (
        <AnimalProvider>
        <CustomerProvider>
        <EmployeeProvider>
        <LocationProvider>
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home />} />

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="animals/*" element={<><AnimalSearch /><AnimalList /></>} />
            <Route path="/animals/create" element={<AnimalForm />} />
            <Route path="/animals/detail/:animalId*" element={<AnimalDetail />} />
            <Route path="animals/edit/:animalId/*" element={<AnimalForm />} />


                
            {/* Render the animal list when http://localhost:3000/customers */}
            <Route path="/customers" element={<CustomerList />} />  

            {/* Render the animal list when http://localhost:3000/employees */}
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/create" element={<EmployeeForm />} />
            <Route path="/employees/detail/:employeeId*" element={<EmployeeDetail />} />
            <Route path="/employees/edit/:employeeId" element={<EmployeeForm />} />



            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations" element={<LocationList />} />
            <Route path="/locations/create" element={<LocationForm />} />
            <Route path="/locations/detail/:locationId" element={<LocationDetail />} />
            <Route path="locations/edit/:locationId/*" element={<LocationForm />} />


        </Routes>
        </LocationProvider>
        </EmployeeProvider>
        </CustomerProvider>
        </AnimalProvider>
    )
}