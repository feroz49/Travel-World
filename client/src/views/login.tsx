import React from 'react';
import '../css/login.css'; // CSS import

const Login: React.FC = () => {

  const togglePassword = () => {
    const pass = document.getElementById("password") as HTMLInputElement;
    if (pass) {
      pass.type = pass.type === "password" ? "text" : "password";
    }
  };

  return (
    <div className="auth-container">

      {/* Left Side Branding */}
      <div className="auth-left">
        <div className="brand-content">
          <h1>TravelWorld ✈️</h1>
          <p>Discover destinations. Create memories. Travel smart.</p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="auth-right">
        <div className="form-box">
          <h2>Welcome Back</h2>
          <p className="subtitle">Login to continue your journey</p>

          {/* Success / Error Messages */}
          {/* In React, you can replace Laravel Blade with props/state */}
          {/* Example placeholders */}
          {/* <div className="alert success">Success message</div>
              <div className="alert error">Error message</div> */}

          <form method="POST" action="/login">
            {/* CSRF not needed in frontend React (handled in backend API) */}
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" required />
              {/* Validation message placeholder */}
              {/* <small className="validation">Error message</small> */}
            </div>

            <div className="form-group password-group">
              <label>Password</label>
              <input type="password" name="password" id="password" required />
              <span className="toggle-password" onClick={togglePassword}>👁</span>
              {/* Validation message placeholder */}
              {/* <small className="validation">Error message</small> */}
            </div>

            <div className="options">
              <label className="remember">
                <input type="checkbox" name="remember" />
                Remember Me
              </label>
              <a href="/forgot-password" className="forgot">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-login">Login</button>
          </form>

          <div className="bottom-text">
            Don’t have an account? <a href="/signup">Sign Up</a>
            <br />
            <a href="/home" className="back-home">← Back to Homepage</a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;