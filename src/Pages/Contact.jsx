import React from 'react';
import ContactForm from '../Components/ContactForm';
import '../Styles/StandardPages.css';

function Contact() {
    return (
        <div className="pageBody">
            <div className="pageContent">
                <ul className="contentList">
                    <li>
                        <div className="textContent container">
                            <h1>Contacts</h1>
                            <p>If you would like to contact our team for anything regarding our website (queries, feedback, bug reports, help or etc) then please either submit a form below, or inform us through email at <mark><strong>example@notyetreal.com</strong></mark> directly.</p>
                        </div>
                    </li>
                    <li>
                        <div className="textContent container">
                            <h1>Submit a Form</h1>
                            <ContactForm />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;