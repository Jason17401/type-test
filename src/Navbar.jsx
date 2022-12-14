import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const tabs = [
    {name: 'Home', href: '/'},
    {name: 'Typing Test', href: '/typing-test'},
    {name: 'About', href: '/about'},
    {name: 'Settings', href: '/settings'},
    {name: 'Help', href: '/help'},
];

let isLoggedIn = false;
var rightTab = (isLoggedIn ? {name: 'Profile', href: '/profile'} : {name: 'Login', href: '/login'});

function Navbar() {
    return (
        <div className="navigation">
            <ul className="navbar">
                {tabs.map((item) => (
                    <NavLink to = { item.href }>{ item.name }</NavLink>
                ))}
                <div className="navbar-right">
                    <NavLink to = { rightTab.href }>{ rightTab.name }</NavLink>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;