import React from "react";

function EmployeeCard(props) {
  return (
    // <table>
    //   <thead>
    //       <tr>
    //         <th>Image</th>
    //         <th>Name</th>
    //         <th>Phone</th>
    //         <th>Email</th>
    //         <th>DOB</th>
    //       </tr>
    //   </thead>
    //   <tbody>
    //       <tr>
    //         <td><img alt={props.name} src={props.image} /></td>
    //         <td>{props.firstName} {props.lastName}</td>
    //         <td>{props.phone}</td>
    //         <td>{props.email}</td>
    //         <td>{props.dob}</td>
    //       </tr>
    //   </tbody>
    // </table> 
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstName} {props.lastName}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li className="img-container">
            <img alt={props.name} src={props.image} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;