import React from 'react';
import { Link } from 'react-router-dom';
import GeneralSettings from '../Components/GeneralSettings';
import AccountSettings from '../Components/AccountSettings';
import TestOptionsSettings from '../Components/TestOptionsSettings';
import TestStylesSettings from '../Components/TestStylesSettings';
import ThemeSettings from '../Components/ThemeSettings';
import ImportantSettings from '../Components/ImportantSettings';
import '../Styles/StandardPages.css';
import '../Styles/Settings.css';

function Settings() {
    var options = [
        {name: "General", href: "general", file: GeneralSettings},
        {name: "Test Options", href: "test_options", file: TestOptionsSettings},
        {name: "Test Styles", href: "test_styles", file: TestStylesSettings},
        {name: "Theme", href: "theme", file: ThemeSettings},
        {name: "Important", href: "important", file: ImportantSettings}
    ];

    let isLoggedIn = false;
    if (isLoggedIn) {
        options.splice(1, 0, {name: "Account", href: "#account", file: AccountSettings})
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
                                        <li><Link to={ "#" + option.href }>{ option.name }</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    {options.map((option) => (
                        <li>
                            <div className="textContent container">
                                <h1 id={ option.href }>{ option.name }</h1>
                                <option.file info={ option }/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Settings;