import React, { useState } from 'react';
import '../css/contact.css'; // CSS import

const Contact: React.FC = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Success / Error messages
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Replace with your backend API URL
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess('Message sent successfully!');
        setError('');
        // Clear form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong!');
        setSuccess('');
      }
    } catch (err) {
      setError('Network error! Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="contact-container">

      {/* LEFT SIDE */}
      <div className="contact-left">
        <h1>Contact TravelWorld ✈️</h1>
        <p>
          Have questions about destinations, bookings or tour guides?  
          We're here to help you plan your perfect journey.
        </p>

        <div className="contact-info">
          📧 Email: support@travelworld.com <br />
          📞 Phone: +880 1234-567890 <br />
          📍 Location: Dhaka, Bangladesh
        </div>

        <a href="/" className="btn-home">← Back to Homepage</a>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <div className="form-box">
          <h2>Send Us a Message</h2>
          <p>We’ll get back to you as soon as possible.</p>

          {success && <div className="alert success">{success}</div>}
          {error && <div className="alert error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">Send Message</button>
          </form>

        </div>
      </div>

    </div>
  );
};

export default Contact;