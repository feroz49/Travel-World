// ...existing code...
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [stats, setStats] = useState({ trips: 0, clients: 0, years: 0 });

  useEffect(() => {
    // simple counter animation for stats
    const target = { trips: 12000, clients: 2000, years: 15 };
    const duration = 1200;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(1, elapsed / duration);
      setStats({
        trips: Math.floor(target.trips * progress),
        clients: Math.floor(target.clients * progress),
        years: Math.floor(target.years * progress),
      });
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // persist subscription locally and show confirmation
    try {
      const list = JSON.parse(localStorage.getItem('subscriptions') || '[]');
      list.push({ email, date: new Date().toISOString() });
      localStorage.setItem('subscriptions', JSON.stringify(list));
    } catch {
      /* ignore storage errors */
    }
    setEmail('');
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="home-page">

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <Link to="/">TRAVEL<span>WORLD</span></Link>
        </div>
        <nav aria-label="Primary">
          <Link className="active" to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/tourguide">Tour Guide</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link className="register-btn" to="/signup">Register</Link>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-left">
            <div className="tagline">Know Before You Go 🌍</div>
            <h1 id="hero-heading">
              Traveling opens the door to creating <span>memories</span>
            </h1>
            <p>Discover destinations. Create memories. Travel smart.</p>
            <div className="hero-cta">
              <Link to="/tourguide" className="btn-primary">Find a Guide</Link>
              <a className="btn-secondary" href="#services">Our Services</a>
            </div>
          </div>
         
        </section>

        {/* Experience / Stats Section */}
        <section className="experience" id="experience">
          <div className="exp-left">
            <span className="exp-tag">Experience</span>
            <h2>
              With our experience <br />
              we will serve you
            </h2>
            <div className="exp-stats">
              <div className="stat">
                <h3>{stats.trips.toLocaleString()}</h3>
                <span>Successful trips</span>
              </div>
              <div className="stat">
                <h3>{stats.clients.toLocaleString()}</h3>
                <span>Regular clients</span>
              </div>
              <div className="stat">
                <h3>{stats.years}</h3>
                <span>Years of experience</span>
              </div>
            </div>
          </div>
                    <div className="exp-right">
           <img src="/images/img.jpg" alt="TravelWorld" />
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <div className="container">
            <div className="services-header">
              <span className="subtitle">What we serve</span>
              <h2>We offer our best <br /> services</h2>
              <p className="lead">Local guides, weather insights, and fully customizable itineraries tailored to you.</p>
            </div>
            <div className="service-cards">
              <div className="card">
                <div className="icon">☁️</div>
                <h3>Weather Insights</h3>
                <p>Check the weather before planning your trips anywhere in the world.</p>
              </div>
              <div className="card">
                <div className="icon">📋</div>
                <h3>Expert Tour Guides</h3>
                <p>Our professional guides make sure your trip is memorable.</p>
              </div>
              <div className="card">
                <div className="icon">⚙️</div>
                <h3>Customization</h3>
                <p>Plan your itinerary your way with our customizable options.</p>
              </div>
              <div className="card">
                <div className="icon">🔒</div>
                <h3>Safe Payments</h3>
                <p>Secure checkout and flexible cancellation policies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="container">
            <h2>Traveler Stories</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p>"Amazing guide — showed us hidden gems and local food. Highly recommend!"</p>
                <strong>— Ayesha, Dhaka</strong>
              </div>
              <div className="testimonial-card">
                <p>"Smooth booking and great support. Trip of a lifetime."</p>
                <strong>— John, London</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter">
          <div className="container">
            <div className="newsletter-left">
              <h2>Subscribe for Travel Tips & Updates</h2>
              <form className="subscribe-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button type="submit">{subscribed ? 'Subscribed ✓' : 'Subscribe'}</button>
              </form>
              <p>Get useful tips and updates directly in your inbox.</p>
            </div>
            <div className="newsletter-right">
              <img
                  loading="lazy"
                   src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                   alt="Three brown wooden boats on a blue lake"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-box">
            <h2 className="footer-logo"><Link to="/">TRAVEL<span>WORLD</span></Link></h2>
            <p>It's time to travel the world</p>
            <p>Discover destinations. Create memories. Travel smart.</p>
            <div className="footer-social" aria-hidden>
              <a href="#" aria-label="YouTube">Y</a>
              <a href="#" aria-label="Twitter">T</a>
              <a href="#" aria-label="Facebook">F</a>
              <a href="#" aria-label="Instagram">I</a>
            </div>
          </div>
          <div className="footer-box">
            <h3>Discover</h3>
            <ul>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/tourguide">Tour Guide</Link></li>
            </ul>
          </div>
          <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Register</Link></li>
            </ul>
          </div>
          <div className="footer-box">
            <h3>Contact</h3>
            <ul>
              <li>📍 Dhaka, Bangladesh</li>
              <li>📧 support@travelworld.com</li>
              <li>📞 00022200222</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 TravelWorld. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Home;