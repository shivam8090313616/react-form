import React, { useState } from "react";
import './loginSignup.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; // Importing the solid icons

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form className="form-group">
                {action==="Log In"?<div></div>: <div className="input">
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    <input type="text" placeholder="Username" />
                </div>}
               
                <div className="input">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    <input type="password" placeholder="Password" />
                </div>
                {action==="Log In"?<div></div>:<div className="forgot-password">Having Trouble ? <span>Click here</span> </div>}
                <div             className="submit-container">
                    <div className={action === "Log In" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>
                        Sign Up
                    </div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Log In") }}>
                        Log In
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginSignup;
