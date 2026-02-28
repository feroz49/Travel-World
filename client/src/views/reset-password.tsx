import React, { useState } from 'react';
import '../css/reset-password.css';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // TODO: Call API here
    setSuccess("Password reset successful! You can now log in.");
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2>
          Reset <span>Password</span>
        </h2>
        <p className="subtitle">Create a new secure password</p>

        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>New Password</label>
          </div>

          <div className="form-group">
            <span className="input-icon">🔑</span>
            <input
              type="password"
              placeholder=" "
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit" className="btn-reset">
            Update Password
          </button>
        </form>

        <div className="bottom-text">
          <a href="/login">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;