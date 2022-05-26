import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <div className="accueil" id="accueil">
                <div className="content">
                    <h1 className="h1-writter">Nathan&nbsp;<span>Turchet</span></h1>
                    <div className="media-container">
                        <div className="wrapper">
                            <a href="https://www.instagram.com/natnat_tu/?hl=fr" rel="noreferrer" className="button">
                                <div className="icon">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="div-a-btn">
                        <NavLink to="#presentation" className="btn">
                            Découvrir
                        </NavLink>
                    </div>
                </div>

            </div>
            <div id="presentation" className="suite">
                <h1>En développement</h1>
            </div>
            <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        </div>
    );
};

export default Home;