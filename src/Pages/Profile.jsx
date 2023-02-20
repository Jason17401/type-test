import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from "firebase/auth";
import { auth, db } from '../firebase';
import '../Styles/StandardPages.css';

function Profile() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                var snapshot = await getDoc(doc(db, "users", user.email));
                setUsername(snapshot.data()["username"]);
            };
        });
    }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("Signed out");
            navigate("/");
        });
    }

    return (
        <div className="pageBody">
            <div className="pageContent">
                <ul className="contentList">
                    <li>
                        <div className="textContent container">
                            <h1>{"Hello " + username}</h1>
                            <button onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;