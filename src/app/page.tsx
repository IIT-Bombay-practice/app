'use client';

import { useState } from "react";
import './Signup.css'; // Import the CSS file

const SignupPage = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const togglePanel = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          
          <span>Use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={togglePanel}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={togglePanel}>Sign Up</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>
          Comapny name can be written here
        </p>
      </footer>
    </div>
  );
};

export default SignupPage;
