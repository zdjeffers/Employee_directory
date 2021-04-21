import React from "react";
import "../style/style.css";

function EmployeeDatabase(props) {
  return (
    <table className="employeeTable">
      <thead>
        <tr>
          <th></th>
          <th onClick={props.handleSortByName}>Employee Name</th>
          <th>Phone Number</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(employee => (
          <tr className="table" key={employee.login.uuid}>
            <td className="image"> <img src={employee.picture.large} alt={employee.name.first + " " + employee.name.last + " "}/></td>
            <td className="name align-middle">{employee.name.first + " " + employee.name.last}</td>
            <td className="phone align-middle">{employee.cell}</td>
            <td className="email align-middle"><a href={`mailto:${employee.email}`}>{employee.email}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default EmployeeDatabase;