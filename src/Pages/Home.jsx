import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import '../Styles/StandardPages.css';
import '../Styles/Home.css';

function Home() {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("uid: ", uid);
            };
        });
    }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("Signed out")
        });
    }

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
                                <h1>Temporary log out</h1>
                                <button onClick={handleLogout}>
                                    Logout
                                </button>
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