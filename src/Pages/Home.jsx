import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home() {
    return (
        <div class="pageBody">
            <div class="pageContent">
                <ul class="contentList">
                    <li>
                        <div class="textContent container">
                            <h1>Welcome to Speedster</h1>
                            <p>Improve your typing speed by practicing on our site!<br/>Create an account to keep track of your progress or start typing now!</p>
                            <div class="typeTestButton">
                                <Link to="/typing-test">Start Typing</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <ul class="sideList">
                            <li class="other container">
                                <h1>No Content 1</h1>
                                <p>Dummy content.</p>
                            </li>
                            <li class="other container">
                                <h1>No Content 2</h1>
                                <p>Dummy content 2.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="textContent container">
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