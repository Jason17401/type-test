import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home() {
    return (
        <div className="pageBody">
            <div className="pageContent">
                <ul className="contentList">
                    <li>
                        <div className="textContent container">
                            <h1>Welcome to Speedster</h1>
                            <p>Improve your typing speed by practicing on our site!<br/>Create an account to keep track of your progress or start typing now!</p>
                            <div className="typeTestButton">
                                <Link to="/typing-test">Start Typing</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <ul className="sideList">
                            <li className="other container">
                                <h1>No Content 1</h1>
                                <p>Dummy content.</p>
                            </li>
                            <li className="other container">
                                <h1>No Content 2</h1>
                                <p>Dummy content 2.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="textContent container">
                            <h1>Other Not Realised Info</h1>
                            <p>Dummy content 3.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;