import React, { useState } from "react";
import "../css/forgot-password.css";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setValidationMsg("");

    if (!email) {
      setValidationMsg("Email is required");
      return;
    }

    try {
      // Replace with your API endpoint
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMsg(data.message || "Reset link sent to your email!");
      } else {
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (err) {
      setErrorMsg("Network error, please try again.");
    }
  };

  return (
    <div className="auth-container">
      {/* Left Side Branding */}
      <div className="auth-left">
        <div className="brand-content">
          <h1>TravelWorld ✈️</h1>
          <p>Reset your password and continue your journey with us.</p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="auth-right">
        <div className="form-box">
          <h2>
            Forgot <span>Password?</span>
          </h2>
          <p className="subtitle">Enter your email to receive a reset link</p>

          {successMsg && <div className="alert success">{successMsg}</div>}
          {errorMsg && <div className="alert error">{errorMsg}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {validationMsg && <small className="validation">{validationMsg}</small>}
            </div>

            <button type="submit" className="btn-login">
              Send Reset Link
            </button>

            <div className="bottom-text">
              Remembered your password? <a href="/login">Login</a>
              <br />
              <a href="/home" className="back-home">
                ← Back to Homepage
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;