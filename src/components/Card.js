import React from "react";
import "../styles/Employee.css";

function Employee(props) {
  return (
    <div className="card">
      <img src={props.image} />
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.dob}</p>
    </div>
  );
}

export default Employee;