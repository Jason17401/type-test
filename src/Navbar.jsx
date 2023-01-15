import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Navbar.css';

const tabs = [
    {name: 'Speedster', href: '/'},
    {name: 'Typing Test', href: '/typing-test'},
    {name: 'About', href: '/about'},
    {name: 'Settings', href: '/settings'}
];

let isLoggedIn = false;
var rightTab = (isLoggedIn ? {name: 'Profile', href: '/profile'} : {name: 'Login', href: '/login'});

function Navbar() {
    return (
        <div className="navigation">
            <ul className="navbar">
                {tabs.map((item) => (
                    <li key="{ item.name }"><NavLink to={ item.href }>{ item.name }</NavLink></li>
                ))}
                <div className="navbar-right">
                    <li key="{ rightTab.name }"><NavLink to={ rightTab.href }>{ rightTab.name }</NavLink></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;