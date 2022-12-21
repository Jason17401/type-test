import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home() {
    return (
        <div class="pageBody">
            <div class="pageContent">
                <div class="pageView">
                    <div class="titleView">
                        <h1>Welcome to Speedster</h1>
                        <p>Improve your typing speed by practicing on our site!<br/>Create an account to keep track of your progress or start your typing test now!
                        </p>
                        <div class="typeTestButton">
                            <Link to="/typing-test">Start Typing</Link>
                        </div>
                    </div>
                    <div class="latestTests">
                        <h1>No Content 1</h1>
                        <p>Dummy content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;