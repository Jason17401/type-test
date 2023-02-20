import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import './Styles/Navbar.css';

function Navbar() {
    const tabs = [
        {name: 'Speedster', href: '/'},
        {name: 'Typing Test', href: '/typing-test'},
        {name: 'About', href: '/about'},
        {name: 'Settings', href: '/settings'}
    ];
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsLoggedIn(true);
                var snapshot = await getDoc(doc(db, "users", user.email));
                setUsername(snapshot.data()["username"]);
            } else {
                setIsLoggedIn(false);
            };
        });
    }, []);
    console.log(username);

    var rightTab = (isLoggedIn ? {name: username, href: '/profile'} : {name: 'Login', href: '/login'});

    return (
        <div className="navigation">
            <ul className="navbar">
                {tabs.map((item) => (
                    <li key={ item.name }><NavLink to={ item.href }>{ item.name }</NavLink></li>
                ))}
                <div className="navbar-right">
                    <li key={ rightTab.name }><NavLink to={ rightTab.href }>{ rightTab.name }</NavLink></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;