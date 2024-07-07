import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import PeopleContextComponent from './PeopleContext';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Declined from './Pages/Declined';
import ViewDetails from './Pages/ViewDetails';

const App = () => {
    return (
        <PeopleContextComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/add-candidate' element={<AddCandidate />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/confirmed' element={<Confirmed />} />
                    <Route path='/declined' element={<Declined />} />
                    <Route path='/viewdetails/:id' element={<ViewDetails />} />
                </Routes>
            </Layout>
        </PeopleContextComponent>
        
    );
}

export default App;