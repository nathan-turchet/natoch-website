import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const headerOpen = () => {
        console.log(window.location.pathname);
        const main_btn = document.querySelector('.main-btn');
        const main_drop = document.querySelector('.main-drop');
        const main_drop_left = document.querySelector('.main-drop .left');
        const main_drop_right = document.querySelector('.main-drop .right');
        const close_main_drop = document.querySelector('.close-main-drop');
        const body = document.querySelector('body');
        const btn_lang = document.querySelector('.btn-lang');
        const dropdown_lang = document.querySelector('.dropdown');

        main_btn.addEventListener('click', () => {
            main_drop.classList.toggle('main-drop-open');
            body.classList.toggle('open');
            main_drop_left.classList.toggle('drop-left-open');
            main_drop_right.classList.toggle('drop-right-open');
            main_btn.classList.toggle('main-btn-clic');
        });

        close_main_drop.addEventListener('click', () => {
            main_drop.classList.remove('main-drop-open');
            body.classList.remove('open');
            main_drop_left.classList.remove('drop-left-open');
            main_drop_right.classList.remove('drop-right-open');
            main_btn.classList.remove('main-btn-clic');
        });

        btn_lang.addEventListener('click', () => {
            dropdown_lang.classList.toggle('dropdown-lang-open');
        });
    }
    return (
        <div>
            <button className="main-btn" onClick={headerOpen}>
                <label>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </label>
            </button>
            <div className="main-drop">
                <div className="left"><button className="close-main-drop"></button></div>
                <div className="right">
                    <div className="div-lang">
                        <button className="btn-lang">
                            <img src="../images/drapeau-fr.png" alt="Drapeau Français" />
                            <p><i className="fas fa-chevron-down"></i></p>
                        </button>
                        <div className="dropdown dropdown-lang-open">
                            <NavLink to={"/en" + window.location.pathname}>
                                <img src="../images/drapeau-en.png" alt="Drapeau Anglais" />
                            </NavLink>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/bio/">
                                Bio
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;