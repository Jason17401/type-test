import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Footer.css';

const tabs = [
    {name: 'Contact', href: '/contact'},
    {name: 'FAQ', href: '/faq'},
    {name: 'Socials', href: '/socials'},
    {name: 'ToS', href: '/tos'},
    {name: 'Privacy', href: '/privacy'}
];

function Footer() {
    return (
        <div className="footer">
            <ul className="botnav">
                {tabs.map((item) => (
                    <NavLink to={ item.href }>{ item.name }</NavLink>
                ))}
            </ul>
        </div>
    )
}

export default Footer;