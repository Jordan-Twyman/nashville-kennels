// import React, { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AnimalContext } from "./AnimalProvider";
// import { AnimalCard } from "./AnimalCard";
// import "./Animal.css";
// import { LocationContext } from "../location/LocationProvider";
// import { CustomerContext } from "../customer/CustomerProvider";

// export const AnimalList = () => {
//   // This state changes when `getAnimals()` is invoked below
//   const { animals, getAnimals } = useContext(AnimalContext);
//   const { locations, getLocations } = useContext(LocationContext);
//   const { customers, getCustomers } = useContext(CustomerContext);
//   const navigate = useNavigate();

//   //useEffect - reach out to the world for something
//   useEffect(() => {
//     console.log("AnimalList: useEffect - getAnimals")
//     getLocations()
//     .then(getCustomers)
//     .then(getAnimals);
//   }, []);


//   return (
//     <>
//       <h2>Animals</h2>
//         <button onClick={() => {navigate('/animals/create')}}>
//           Add Animal
//         </button>
//       <div className="animals">
//         {console.log("AnimalList: Render", animals)}
//         {
//           animals.map(animal => {
//             const owner = customers.find(c => c.id === animal.customerId);
//             const clinic = locations.find(l => l.id === animal.locationId);

//             return <AnimalCard 
//                       key={animal.id}
//                       location={clinic}
//                       customer={owner} 
//                       animal={animal} />
//           })
//         }
//       </div>
//     </>
//   );
// }

import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useNavigate } from "react-router"



export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)
    const navigate = useNavigate()

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => navigate("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    animals.map(animal => {
                        return <AnimalCard key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}
