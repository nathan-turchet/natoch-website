import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const Error404 = () => {
    return (
        <div>
            <Header />
            <h1>ERREUR 404</h1>
            <br />
            <h3>La page demander est introuvable</h3>
            <NavLink to='/'>
                Home
            </NavLink>
        </div>
    );
};

export default Error404;