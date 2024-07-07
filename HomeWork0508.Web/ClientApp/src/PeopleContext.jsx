import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';

const PeopleContext = createContext();

const PeopleContextComponent = (props) => {
    const [people, setPeople] = useState([]);

    const refreshPeople = async () => {
        const { data } = await axios.get('/api/people/getpeople');
        setPeople(data);
    }

    useEffect(() => {
        refreshPeople();
    }, []);

    const obj = {
        people,
        setPeople,
        refreshPeople,
    }

    return <PeopleContext.Provider value={obj}>
        {props.children}
    </PeopleContext.Provider>
}

const usePeople = () => {
    return useContext(PeopleContext);
}

export default PeopleContextComponent;
export { usePeople };