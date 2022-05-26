import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="accueil" id="accueil">
                <h1 className="h1-writter-none">Nathan&nbsp;<span>Turchet</span></h1>
                <h1 className="h1-writter">Nathan&nbsp;<span>Turchet</span></h1>
                <div className="media-container">
                    <div className="wrapper">
                        <a href="https://www.instagram.com/natnat_tu/?hl=en" rel="noreferrer" target="_blank" className="button">
                            <div className="icon">
                                <i className="fab fa-instagram"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="div-a-btn">
                    <NavLink to="#presentation" className="btn">
                        Discover
                    </NavLink>
                </div>
            </div>
            <div id="presentation" className="suite">
                <h1>In development</h1>
            </div>
        </div>
    );
};

export default Home;