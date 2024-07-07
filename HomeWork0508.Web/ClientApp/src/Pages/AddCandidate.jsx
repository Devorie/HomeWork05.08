import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { usePeople } from "../PeopleContext";

const AddCandidate = () => {

    const navigate = useNavigate();
    const { refreshPeople } = usePeople();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [details, setDetails] = useState('')

    const onSubmitClick = async () => {
        await axios.post('/api/people/addperson', {
            firstName,
            lastName,
            email,
            phoneNumber,
            details,
            status: "Pending"
        });
        refreshPeople();
        navigate('/');
    }
    return (
        <div style={{ minHeight: 1000, paddingTop: 200 }}>
            <div className="row">
                <div className='col-md-6 offset-md-3 card bg-light p-4'>
                    <h2>Add a New Candidate</h2>
                    <input type="text" className='form-control' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
                    <br />
                    <input type="text" className='form-control' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
                    <br />
                    <input type="text" className='form-control' name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <br />
                    <input type="text" className='form-control' name='phoneNumber' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                    <br />
                    <div className="mb-3">
                        <label className="form-label">Details / Notes</label>
                        <textarea onChange={e => setDetails(e.target.value)} value={details} className="form-control" rows={5} />
                    </div>
                    <br />
                    <button className='btn btn-primary btn-lg btn-block' onClick={onSubmitClick}>Submit</button>
                </div>
            </div>
        </div>
    )
}


export default AddCandidate;