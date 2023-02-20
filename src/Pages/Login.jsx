import React, { useState } from 'react';
import SignupForm from '../Components/SignupForm';
import LoginForm from '../Components/LoginForm';
import '../Styles/StandardPages.css';

function Login() {
    const [selectedFunction, setFunction] = useState("Login")

    return (
        <div className="pageBody">
            <div className="pageContent">
                <ul className="contentList">
                    <li>
                        <div className="textContent container">
                            <div className="accountFunctions">
                                <button className={selectedFunction === "Login" ? "active" : ""} onClick={() => setFunction("Login")}>
                                    <h1>Login</h1>
                                </button>
                                <h1>|</h1>
                                <button className={selectedFunction === "Signup" ? "active" : ""} onClick={() => setFunction("Signup")}>
                                    <h1>Signup</h1>
                                </button>
                            </div>
                            {selectedFunction === "Login" && (
                                <LoginForm />
                            )}
                            {selectedFunction === "Signup" && (
                                <SignupForm selectedFunction={selectedFunction} setFunction={setFunction} />
                            )}
                        </div>
                    </li>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Login;