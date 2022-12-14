import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TypingTest from './TypingTest';
import About from './About';
import Settings from './Settings';
import Help from './Help';
import Login from './Login';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/typing-test" element={ <TypingTest /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/settings" element={ <Settings /> } />
                <Route path="/help" element={ <Help /> } />
                <Route path="/login" element={ <Login /> } />
            </Routes> 
        </Router>
    )
}

export default App;