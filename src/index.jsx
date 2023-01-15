import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

if (typeof window !== 'undefined') {
    ReactDOM.hydrate(
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>,
        document.getElementById('root'));
};