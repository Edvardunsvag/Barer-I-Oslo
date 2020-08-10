import React from 'react';
import './App.css';
import Error from './Pages/Error';
import SingleRoom from './Pages/SingleRoom';
import Rooms from './Pages/Rooms';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

import { BrowserRouter as Switch, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/Rooms' component={Rooms}></Route>
                <Route exact path='/Rooms/:slug' component={SingleRoom}></Route>
                <Route exact component={Error}></Route>
            </Switch>
        </>
    );
}

export default App;
