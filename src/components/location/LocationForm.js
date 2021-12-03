import React, { useContext, useEffect, setState, useState } from "react";
import { AnimalContext } from "../animal/AnimalProvider";
import "./Animal.css";
import { useNavigate } from 'react-router-dom';


export const LocationForm = () => {
  const { addLocation } = useContext(AnimalContext);
//   const { customers, getCustomers } = useContext(CustomerContext);

  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  Define the intial state of the form inputs with useState()
  */

  const [location, setLocation] = useState({

    name: "",
    address:""
  });

  const navigate = useNavigate();

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  useEffect(() => {
    getLocations();
  }, []);

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newLocation = { ...location };
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newLocation[event.target.id] = event.target.value;
    // update state
    setLocation(newLocation);
  }

  const handleClickSaveLocation = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

 

    // if (locationId === 0 || customerId === 0) {
    //   window.alert("Please select a location");
    // } else {
    //   //invoke addAnimal passing animal as an argument.
    //   //once complete, change the url and display the animal list
    //   addAnimal(animal)
    //   .then(() => navigate("/animals"));
    // }
    addLocation(location)
    .then(() => navigate("/locations")
    );
  }

  return (
    <form className="LocationForm">
      <h2 className="animalForm__title">New Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name}/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location address :</label>
          <input type="text" id="address" onChange={handleControlledInputChange} required className="form-control" placeholder="Location address" value={location.address}/>
        </div>
      </fieldset>
      <button className="btn btn-primary"
        onClick={handleClickSaveLocation}>
        Save New Location
      </button>
    </form>
  );
}