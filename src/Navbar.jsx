import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
    {name: 'Home', href: '/'},
    {name: 'Typing Test', href: '/typing-test'},
    {name: 'About', href: '/about'},
    {name: 'Settings', href: '/settings'},
    {name: 'Help', href: '/help'}
]

function Navbar() {
    return (
        <nav>
            <ul className="fullnavbar">
                {tabs.map((item) => (
                    <NavLink
                        key = { item.name }
                        to = { item.href }
                        className = {({isActive}) => {
                            console.log(item.href + ' ' + isActive)
                        }}
                    >
                        { item.name }
                    </NavLink>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;