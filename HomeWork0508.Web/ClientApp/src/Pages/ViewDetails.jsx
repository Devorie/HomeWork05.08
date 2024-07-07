import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { produce } from 'immer';
import { usePeople } from '../PeopleContext';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    const { refreshPeople } = usePeople();

    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        notes: '',
        status: ''
    });
    useEffect(() => {
        const getPerson = async () => {
            const { data } = await axios.get(`/api/people/get?id=${id}`);
            setPerson(data);
        }

        getPerson();
    }, []);

    const onUpdateStatusClick = async status => {
        await axios.post('/api/people/updatestatus', { id, status});
        const nextState = produce(person, draft => {
            draft.status = status;
        });
        setPerson(nextState);
        await refreshPeople();
    }

    if (!person) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
            <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: "30rem", backgroundColor: "#f8f9fa" }}>
                <div className="card-body">
                    <h3 className="card-title fw-bold">Name: {person.firstName} {person.lastName}</h3>
                    <p className="card-text fs-5">Email: {person.email}</p>
                    <p className="card-text fs-5">Phone: {person.phoneNumber}</p>
                    <p className="card-text fs-5">Status: {person.status}</p>
                    <p className="card-text fs-5">Notes:
                        <>{person.details || 'N/A'}</>
                        </p>
                    <div>
                        <button className="btn btn-outline-success" onClick={() => onUpdateStatusClick('Confirmed')}>Confirm</button>
                        <button className="btn btn-outline-danger" onClick={() => onUpdateStatusClick('Declined')}>Declined</button>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default ViewDetails;