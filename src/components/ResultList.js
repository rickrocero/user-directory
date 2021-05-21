import React from "react";

export default function ResultList(props) {
  console.log('===============',props);
  return (
          <tr>
            <td scope="row"><img alt={props.name} src={props.image} /></td>
            <td>{props.firstName} {props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
          </tr>
  )
}

