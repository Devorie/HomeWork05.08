import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { usePeople } from "../PeopleContext";

const Pending = () => {

    const navigate = useNavigate();
    const { people } = usePeople();
    return (
        <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {people
                        .filter(p => p.status === "Pending")
                        .map(person => (
                        <tr key={person.id} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>
                            <td style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                                <Link to={`/viewdetails/${person.id}`}>
                                    View Details
                                </Link>
                            </td>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.phoneNumber}</td>
                            <td>{person.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default Pending;