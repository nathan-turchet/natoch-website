import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const Error404 = () => {
    return (
        <div>
            <Header />
            <h1>ERROR 404</h1>
            <br />
            <h3>The requested page was not found</h3>
            <NavLink to="/en/">
                <p>Home</p>
            </NavLink>
        </div>
    );
};

export default Error404;