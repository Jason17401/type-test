import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Settings.css';

function Settings() {
    var options = [
        {name: "General", href: "#general"},
        {name: "Test Options", href: "#test_options"},
        {name: "Test Styles", href: "#test_styles"},
        {name: "Theme", href: "#theme"},
        {name: "Important", href: "#important"}
    ];

    let isLoggedIn = false;
    if (isLoggedIn) {
        options.splice(1, 0, {name: "Account", href: "#account"})
    };

    return (
        <div className="pageBody">
            <div className="pageContent">
                <ul className="contentList">
                    <li>
                        <div className="textContent container">
                            <h1>Settings</h1>
                            <p>Optimise your settings here to improve your experience on our site!</p>
                            <div className="rowLinks">
                                <ul className="settingsList">
                                    {options.map((option) => (
                                        <li><Link to={ option.href }>{ option.name }</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    {options.map((option) => (
                        <li>
                            <div className="textContent container">
                                <h1 id={ option.href }>{ option.name }</h1>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Settings;