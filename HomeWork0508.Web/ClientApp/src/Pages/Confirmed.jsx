import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { usePeople } from "../PeopleContext";

const Confirmed = () => {

    const navigate = useNavigate();
    const { people } = usePeople();
    const [showNotes, setShowNotes] = useState(true);

    const toggleNotesClick = () => {
        setShowNotes(!showNotes);
    }

    return (
        <div style={{ minHeight: 1000, paddingTop: 50 }}>
            <h1>Confirmed</h1>
            <div>
                {showNotes && <button className="btn btn-success" onClick={toggleNotesClick}>Hide Details</button>}
                {showNotes || <button className="btn btn-success" onClick={toggleNotesClick}>Show Details</button>}

                <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                {showNotes && <th>Details / Notes</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {people
                                .filter(p => p.status == "Confirmed")
                                .map(person => (
                                    <tr key={person.id} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>
                                        <td>{person.firstName}</td>
                                        <td>{person.lastName}</td>
                                        <td>{person.phoneNumber}</td>
                                        <td>{person.email}</td>
                                        {showNotes && <td>{person.details}</td>}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default Confirmed;