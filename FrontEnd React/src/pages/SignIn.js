import { useState } from "react";
import "./signin.css";

const SignIn = () => {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  const userDetails = () =>{
    console.log(userName);
    console.log(password);
    
  }

  return (
    <div>
      <div className="body">
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
                <input type="text" id="userName" onChange={(e)=> setUserName(e.target.value)} placeholder="Username" />
                <i className="fas fa-user"></i>
              </div>
              <div className="input-group">
                <input type="password" id="pass" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <i className="fas fa-lock"></i>
              </div>
              <button type="button" onClick={userDetails} className="login-button">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
