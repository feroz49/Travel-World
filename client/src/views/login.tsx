import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/login.css';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: undefined });
    }
    setError('');
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email or Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (validate()) {
      setLoading(true);
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            email: formData.email,
            password: formData.password,
            remember: formData.rememberMe
          }),
        });

        if (response.ok) {
          // Login successful - redirect to home or dashboard
          navigate('/');
        } else {
          const data = await response.json();
          setError(data.message || 'Invalid credentials. Please try again.');
        }
      } catch (err) {
        setError('Network error! Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="auth-page">
      {/* Background with Travel Theme */}
      <div className="auth-bg">
        <div className="auth-bg-overlay"></div>
        <div className="travel-particles">
          <span>✈️</span>
          <span>🌍</span>
          <span>🏝️</span>
          <span>⛵</span>
          <span>🌅</span>
          <span>🗺️</span>
          <span>🏖️</span>
          <span>🧭</span>
        </div>
      </div>
      
      {/* Glassmorphism Form Container */}
      <motion.div 
        className="login-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div 
          className="login-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Header Section */}
          <motion.div 
            className="login-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="login-logo">
              <span className="logo-icon">🌍</span>
              <h1>TravelWorld</h1>
            </div>
            <h2>Welcome Back! 👋</h2>
            <p className="login-subtitle">Login to continue your adventure</p>
          </motion.div>

          {/* Error Alert */}
          {error && (
            <motion.div 
              className="login-alert error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>⚠️</span> {error}
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* Email/Username Field */}
            <motion.div 
              className={`form-group ${errors.email ? 'has-error' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email or Username"
                  className={errors.email ? 'error' : ''}
                  id="login-email"
                  autoComplete="email"
                />
                <label htmlFor="login-email">Email or Username</label>
              </div>
              {errors.email && (
                <motion.small 
                  className="error-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.email}
                </motion.small>
              )}
            </motion.div>

            {/* Password Field */}
            <motion.div 
              className={`form-group ${errors.password ? 'has-error' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={errors.password ? 'error' : ''}
                  id="login-password"
                  autoComplete="current-password"
                />
                <label htmlFor="login-password">Password</label>
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && (
                <motion.small 
                  className="error-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.password}
                </motion.small>
              )}
            </motion.div>

            {/* Remember Me & Forgot Password */}
            <motion.div 
              className="form-options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkbox-custom"></span>
                <span className="checkbox-label">Remember Me</span>
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password? 🔑
              </Link>
            </motion.div>

            {/* Login Button */}
            <motion.button 
              type="submit" 
              className="login-btn"
              disabled={loading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? (
                <span className="loading-spinner"></span>
              ) : (
                <>
                  Login <span>🚀</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <motion.div 
            className="login-divider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span>or</span>
          </motion.div>

          {/* Social Login */}
          <motion.div 
            className="social-login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <button type="button" className="social-btn google">
              <span>G</span> Google
            </button>
            <button type="button" className="social-btn facebook">
              <span>f</span> Facebook
            </button>
          </motion.div>

          {/* Footer Links */}
          <motion.div 
            className="login-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            <Link to="/" className="back-home">
              ← Back to Homepage
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;

