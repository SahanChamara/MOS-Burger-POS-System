import React from "react";
import "./signin.css";

const SignIn = () => {
  return (
    <div>
      <body>
        <div className="login-container">
          <div className="brand-section">
            <h2>Welcome to Mos Burger POS </h2>
            <p>
              Access your point of sale system with enhanced security and a
              streamlined interface designed for efficiency.
            </p>
          </div>
          <div className="login-form">
            <div className="form-header">
              <h1>Login to POS</h1>
              <p>Enter your credentials to access the system</p>
            </div>
            <form>
              <div className="input-group">
                <input type="text" id="userName" placeholder="Username" />
                <i className="fas fa-user"></i>
              </div>
              <div className="input-group">
                <input type="password" id="pass" placeholder="Password" />
                <i className="fas fa-lock"></i>
              </div>
              <button type="button" className="login-button" onClick="signIn()">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};

export default SignIn;
