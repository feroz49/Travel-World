import React, { useState } from 'react';
import '../css/login.css'; // CSS import

const Register: React.FC = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  // Success / Error messages
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple frontend validation
    if (password !== passwordConfirmation) {
      setError("Passwords do not match!");
      setSuccess('');
      return;
    }

    try {
      // Replace with your backend API endpoint
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, password_confirmation: passwordConfirmation }),
      });

      if (response.ok) {
        setSuccess("Registration successful!");
        setError('');
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
      } else {
        const data = await response.json();
        setError(data.message || "Something went wrong!");
        setSuccess('');
      }
    } catch (err) {
      setError("Network error! Please try again.");
      setSuccess('');
    }
  };

  return (
    <div className="auth-container">

      {/* Left Side Branding */}
      <div className="auth-left">
        <div className="brand-content">
          <h1>TravelWorld ✈️</h1>
          <p>
          Have questions about destinations, bookings or tour guides?  
          We're here to help you plan your perfect journey.
        </p>

        <div className="contact-info">
          📧 Email: support@travelworld.com <br />
          📞 Phone: +880 1234-567890 <br />
          📍 Location: Dhaka, Bangladesh
        </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="auth-right">
        <div className="form-box">
          <h2>Create Account</h2>
          <p className="subtitle">Register to start your journey</p>

          {success && <div className="alert success">{success}</div>}
          {error && <div className="alert error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group password-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group password-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-login">Register</button>
          </form>

          <div className="bottom-text">
            Already have an account? <a href="/login">Login</a>
            <br />
            <a href="/home" className="back-home">← Back to Homepage</a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Register;