import React from "react";

function EmployeeTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Profile</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.people.map(person => (
                    <tr key={person.phone}>
                        <td><img alt="Profile" src={person.picture.medium} /></td>
                        <td>{person.name.first}</td>
                        <td>{person.name.last}</td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                        <td>{person.location.city}</td>
                        <td>{person.location.state}</td>
                        <td>{person.location.country}</td>
                        <td>{person.dob.date.substring(0,10)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default EmployeeTable;