import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/profile.css';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  
  // Mock user data - in real app this would come from props/context/API
  const [userData, setUserData] = useState({
    fullName: 'John Traveler',
    username: 'johntraveler',
    email: 'john.traveler@email.com',
    phone: '+1 234 567 8900',
    address: '123 Adventure Street, New York, NY 10001',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  });

  // Stats data
  const stats = [
    { icon: '✈️', label: 'Trips Booked', value: '12' },
    { icon: '❤️', label: 'Favorites', value: '28' },
    { icon: '🌍', label: 'Countries Visited', value: '8' },
    { icon: '⭐', label: 'Reviews', value: '15' }
  ];

  // Travel history
  const travelHistory = [
    { destination: 'Bali, Indonesia', date: 'Dec 2024', status: 'Completed' },
    { destination: 'Paris, France', date: 'Oct 2024', status: 'Completed' },
    { destination: 'Tokyo, Japan', date: 'Aug 2024', status: 'Completed' }
  ];

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // API call to save would go here
    console.log('Profile saved:', userData);
  };

  return (
    <div className="profile-page">
      {/* Background */}
      <div className="profile-bg"></div>
      <div className="profile-overlay"></div>
      
      {/* Floating travel elements */}
      <div className="travel-elements">
        <span>✈️</span>
        <span>🌍</span>
        <span>🏝️</span>
        <span>🗺️</span>
        <span>🌄</span>
        <span>🏔️</span>
      </div>

      <div className="profile-content">
        {/* Header Card */}
        <motion.div 
          className="profile-header-card"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-header-bg"></div>
          <div className="profile-header-content">
            <motion.div 
              className="profile-avatar"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <img src={userData.photo} alt={userData.fullName} />
              <div className="avatar-edit">
                <span>📷</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {userData.fullName}
            </motion.h1>
            <motion.p 
              className="username"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              @{userData.username}
            </motion.p>
            <motion.div 
              className="profile-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="btn-edit-profile" onClick={handleEdit}>
                {isEditing ? '✏️ Cancel' : '✏️ Edit Profile'}
              </button>
              <button className="btn-change-password" onClick={() => setShowPasswordModal(true)}>
                🔐 Change Password
              </button>
            </motion.div>
          </div>
        </motion.div>

        <div className="profile-grid">
          {/* Personal Info Card */}
          <motion.div 
            className="profile-card personal-info-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="card-header">
              <h2>👤 Personal Information</h2>
              {isEditing && <span className="editing-badge">Editing</span>}
            </div>
            <div className="card-body">
              <div className="info-group">
                <label>Full Name</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="fullName"
                    value={userData.fullName}
                    onChange={handleChange}
                    className="edit-input"
                  />
                ) : (
                  <p>{userData.fullName}</p>
                )}
              </div>
              <div className="info-group">
                <label>Email Address</label>
                {isEditing ? (
                  <input 
                    type="email" 
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="edit-input"
                  />
                ) : (
                  <p>{userData.email}</p>
                )}
              </div>
              <div className="info-group">
                <label>Phone Number</label>
                {isEditing ? (
                  <input 
                    type="tel" 
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    className="edit-input"
                  />
                ) : (
                  <p>{userData.phone}</p>
                )}
              </div>
              <div className="info-group">
                <label>Address</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="address"
                    value={userData.address}
                    onChange={handleChange}
                    className="edit-input"
                  />
                ) : (
                  <p>{userData.address}</p>
                )}
              </div>
              {isEditing && (
                <motion.button 
                  className="btn-save"
                  onClick={handleSave}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  💾 Save Changes
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            className="profile-card stats-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="card-header">
              <h2>📊 Travel Stats</h2>
            </div>
            <div className="card-body">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="stat-icon">{stat.icon}</span>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Travel History Card */}
          <motion.div 
            className="profile-card history-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="card-header">
              <h2>🗺️ Travel History</h2>
              <Link to="/bookings" className="view-all">View All →</Link>
            </div>
            <div className="card-body">
              <div className="travel-list">
                {travelHistory.map((trip, index) => (
                  <motion.div 
                    key={index}
                    className="travel-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="travel-icon">🛫</div>
                    <div className="travel-details">
                      <h4>{trip.destination}</h4>
                      <p>{trip.date}</p>
                    </div>
                    <span className="travel-status completed">{trip.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions Card */}
          <motion.div 
            className="profile-card actions-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="card-header">
              <h2>⚡ Quick Actions</h2>
            </div>
            <div className="card-body">
              <div className="quick-actions">
                <motion.button 
                  className="action-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>🎯</span> Book New Trip
                </motion.button>
                <motion.button 
                  className="action-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>❤️</span> My Favorites
                </motion.button>
                <motion.button 
                  className="action-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>💳</span> Payment Methods
                </motion.button>
                <motion.button 
                  className="action-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>🔔</span> Notifications
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back to Home */}
        <motion.div 
          className="back-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/" className="back-home-btn">
            ← Back to Homepage
          </Link>
        </motion.div>
      </div>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowPasswordModal(false)}
        >
          <motion.div 
            className="password-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={e => e.stopPropagation()}
          >
            <h3>🔐 Change Password</h3>
            <div className="modal-body">
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" />
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowPasswordModal(false)}>
                Cancel
              </button>
              <button className="btn-confirm">
                Update Password
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Profile;

