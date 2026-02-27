import React, { useState } from "react";
import "../css/reset-password.css";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setValidationMsg("");

    if (!email || !password || !passwordConfirm) {
      setValidationMsg("All fields are required");
      return;
    }

    if (password !== passwordConfirm) {
      setValidationMsg("Passwords do not match");
      return;
    }

    try {
      // Replace with your backend API endpoint
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, password_confirmation: passwordConfirm }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg(data.message || "Password reset successfully!");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
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
            Reset <span>Password</span>
          </h2>

          {successMsg && <div className="alert success">{successMsg}</div>}
          {errorMsg && <div className="alert error">{errorMsg}</div>}
          {validationMsg && <div className="alert error">{validationMsg}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-login">
              Reset Password
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

export default ResetPassword;