import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import '../Styles/Forms.css';

function SignupForm() {
    const navigate = useNavigate();

    const {
        register: signUpRegister,
        handleSubmit: signUpHandleSubmit,
        getValues: signUpGetValues,
        formState: { errors: signUpErrors },
        reset: signUpReset
    } = useForm({
        mode: "onChange"
    });

    const [successMessage, setSuccessMessage] = useState("");

    const onSubmitSignUp = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                try {
                    const docRef = doc(db, "users", user.email)
                    await setDoc(docRef, {username: data.username, uid: user.uid});
                    console.log("Document added successfully");
                } catch (error) {
                    console.error("Error adding document:", error);
                }
                console.log(user);
                signUpReset();
                setSuccessMessage("Account successfully created")
                setTimeout(() => { navigate("/") }, 3000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className="contactForm">
            <form onSubmit={signUpHandleSubmit(onSubmitSignUp)} key={4}>
                <div className="formField">
                    <label>Username<span className="asterisk">*</span></label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        { ...signUpRegister("username", {
                            required: "Username is required.",
                            maxLength: {
                                value: 20,
                                message: "Username can be no longer than 20 characters."
                            }
                        })}
                    />
                    {signUpErrors.username && <p className="errorMessage">{signUpErrors.username.message}</p>}
                </div>
                <div className="formField">
                    <label>Email Address<span className="asterisk">*</span></label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        { ...signUpRegister("email", {
                            required: "Email Address is required.",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Email Address is not valid."
                            }
                        })}
                    />
                    {signUpErrors.email && <p className="errorMessage">{signUpErrors.email.message}</p>}
                </div>
                <div className="formField">
                    <label>Password<span className="asterisk">*</span></label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        { ...signUpRegister("password", {
                            required: "Password is required.",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long."
                            },
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                message: "Password must contain at minimum:\n- 1 lowercase letter\n- 1 uppercase letter\n- 1 digit\n- 1 special character (#?!@$%^&*-)"
                            }
                        })}
                    />
                    {signUpErrors.password && <p className="errorMessage">{signUpErrors.password.message}</p>}
                </div>
                <div className="formField">
                    <label>Confirm Password<span className="asterisk">*</span></label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        { ...signUpRegister("confirmPassword", {
                            required: "Password confirmation is required.",
                            validate: (value) => value === signUpGetValues("password") || "Passwords do not match."
                        })}
                    />
                    {signUpErrors.confirmPassword && <p className="errorMessage">{signUpErrors.confirmPassword.message}</p>}
                </div>
                <div className="formField">
                    <label></label>
                    <button type="submit">Sign up</button>
                </div>
                { successMessage && <p className="message">{ successMessage }</p>}
            </form>
        </div>
    );
}

export default SignupForm;