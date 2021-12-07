import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { useNavigate } from "react-router"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"


export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext);
    const { getAnimals, animals } = useContext(AnimalContext)

    const navigate = useNavigate();

  
    //useEffect - reach out to the world for something.
    //In this case it is reaching out to the api call for locations
    useEffect(() => {
      console.log("LocationList: useEffect - getLocations")
      getEmployees().then(getAnimals).then
      (getLocations)
  
    }, [])
  
  
    return (
      <>
      <h2>Locations</h2>
      <button onClick={() => {navigate('/locations/create')}}>
        Add Location
      </button>
      <div className="locations">
        {console.log("LocationList: Render", locations, employees, animals)}
        {
          locations.map(location => {
            const allAnimals = animals.filter(a => a.locationId === location.id)
            const allEmployees = employees.filter(e => e.locationId === location.id)

            return <LocationCard key={location.id} location={location} employees={allEmployees} animals={allAnimals} />
          })
        }
      </div>
      </>
    )
  }

  // export const LocationList = () => {
  //   // This state changes when `getAnimals()` is invoked below
  //   const { location, getLocations } = useContext(LocationContext);
  //   const navigate = useNavigate();
  
  //   //useEffect - reach out to the world for something
  //   useEffect(() => {
  //     console.log("LocationList: useEffect - getLocations")
  //     getLocations();
  //   }, []);
  
  
  //   return (
  //     <>
  //       <h2>Locations</h2>
  //         <button onClick={() => {navigate('/locations/create')}}>
  //           Add Location
  //         </button>
  //       <div className="locations">
  //         {console.log("LocationList: Render", location)}
  //         {
  //           location.map(location => {
  //             return <LocationCard key={location.id} location={location} />
  //           })
  //         }
  //       </div>
  //     </>
  //   );
  // }