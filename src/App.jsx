import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Pages/Home';
import TypingTest from './Pages/TypingTest';
import About from './Pages/About';
import Settings from './Pages/Settings';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import Socials from './Pages/Socials';
import ToS from './Pages/ToS';
import Privacy from './Pages/Privacy';
import './Styles/App.css';

function App() {
    return (
        <div class="flex-wrapper">
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/typing-test" element={ <TypingTest /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/settings" element={ <Settings /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/faq" element={ <FAQ /> } />
                <Route path="/socials" element={ <Socials /> } />
                <Route path="/tos" element={ <ToS /> } />
                <Route path="/privacy" element={ <Privacy /> } />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;