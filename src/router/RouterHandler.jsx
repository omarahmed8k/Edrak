import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';

const RouterHandler = () => {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
        </Router>
    );
}

export default RouterHandler;