import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function SignupForm({ selectedFunction, setFunction }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const onSubmit = async (data) => {
        data.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setSuccessMessage("Account successfully created")
                setTimeout(() => { setFunction("Login") }, 4000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className="contactForm">
            <form>
                <div className="formField">
                    <label>Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        placeholder="Email address"
                    />
                </div>
                <div className="formField">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        placeholder="Password"
                    />
                </div>
                <div className="formField">
                    <label></label>
                    <button type="submit" onClick={onSubmit}>Sign up</button>
                </div>
                { successMessage && <p className="message">{ successMessage }</p>}
            </form>
        </div>
    );
}

export default SignupForm;