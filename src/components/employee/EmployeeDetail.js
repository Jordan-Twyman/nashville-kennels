import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useNavigate } from "react-router-dom"

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();
	const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
    }, [])

  return (
    <section className="employee">
      <h3 className="employeeName">{employee.name}</h3>
      <div className="employeeRate">${employee.hourlyRate}/hr</div>
        <div className="employeeManager">{employee.manager ? `Manager` : "Kennel Tech"}</div>
        <div className="employeeHours">{employee.fullTime ? `Full Time` : "Part Time"}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="employee__location">Location: {employee.location?.name}</div>
      <button onClick={() => {navigate(`/employees/edit/${employeeId}`)}} >Edit</button>
    </section>
  )
}
