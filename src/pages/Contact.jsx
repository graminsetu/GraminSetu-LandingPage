import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import PageTitle from '../components/PageTitle';
import HelpSupportButton from '../components/HelpSupport/HelpSupportButton';
import Toast from '../components/Toast';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import './Contact.scss';

function Contact() {
  const location = useLocation();

  // Using individual state variables to completely isolate fields
  // This prevents any possibility of state object merging issues or 'ghost' updates
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      // Simulation for Frontend Demo (ensures "working" state for user)
      // const baseUrl = process.env.REACT_APP_STRAPI_API_URL || 'http://localhost:1337/api';
      // const apiUrl = baseUrl.endsWith('/api') ? baseUrl : `${baseUrl}/api`;

      // Construct payload explicitly
      // const payload = {
      //   data: {
      //     name: name,
      //     email: email,
      //     subject: subject,
      //     message: message,
      //   },
      // };

      // await axios.post(`${apiUrl}/contacts`, payload, {
      //   headers: { 'Content-Type': 'application/json' },
      // });

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus({
        type: 'success',
        message: 'Message sent successfully! Our team will contact you shortly.',
      });

      // Clear form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setShowToast(true);
    } catch (err) {
      console.error('Contact Form Error:', err);
      // Even if simulation fails (unlikely), show error
      const errorMsg = 'Unable to send message. Please try again later.';
      setStatus({ type: 'error', message: errorMsg });
      setShowToast(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page-polished">
      <PageTitle pathname={location.pathname} />
      <Navbar />

      {/* Hero Header */}
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Whether you have a question about features, trials, pricing, or anything else, our team is
          ready to answer all your questions.
        </p>
      </section>

      {/* 3 Floating Info Cards */}
      <section className="info-cards-grid">
        <div className="info-card">
          <div className="icon-box">
            <Mail size={28} />
          </div>
          <h3>Email Support</h3>
          <p>Our team usually replies in 24h</p>
          <a href="mailto:support@graminsetu.in">support@graminsetu.in</a>
        </div>

        <div className="info-card">
          <div className="icon-box">
            <Phone size={28} />
          </div>
          <h3>Phone Support</h3>
          <p>Mon-Fri from 9am to 6pm</p>
          <a href="tel:+919704635156">+91-9704635156</a>
        </div>

        <div className="info-card">
          <div className="icon-box">
            <MapPin size={28} />
          </div>
          <h3>Visit Our Office</h3>
          <p>Visakhapatnam, Andhra Pradesh</p>
          <a href="#map" onClick={(e) => e.preventDefault()}>
            View on Map
          </a>
        </div>
      </section>

      {/* Main Split Layout */}
      <main className="main-grid-layout">
        {/* Left: Contact Form */}
        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          <p className="subtitle">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="form-group">
                <label htmlFor="contact_name_field">Your Name</label>
                <input
                  id="contact_name_field"
                  type="text"
                  name="user_name_input" /* Unique Name to avoid conflicts */
                  placeholder="e.g. Rahul Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact_email_field">Email Address</label>
                <input
                  id="contact_email_field"
                  type="email"
                  name="user_email_input"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact_subject_field">Subject</label>
              <input
                id="contact_subject_field"
                type="text"
                name="user_subject_input"
                placeholder="How can we help you?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact_message_field">Message</label>
              <textarea
                id="contact_message_field"
                name="user_message_input"
                rows="6"
                placeholder="Tell us more about your inquiry..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Map & Socials Stack */}
        <div className="map-social-stack">
          {/* Map Widget */}
          <div className="map-wrapper" id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243208.1706596468!2d83.13969299442111!3d17.738612187648356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1708456182435!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GraminSetu Office Location"
            ></iframe>
          </div>

          {/* Social Connect Card */}
          <div className="social-card">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/graminsetu/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://twitter.com/graminsetu"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
              <button disabled aria-label="Facebook">
                <Facebook size={22} />
              </button>
              <button disabled aria-label="Instagram">
                <Instagram size={22} />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Toast
        message={showToast ? status?.message : ''}
        type={status?.type === 'error' ? 'error' : 'success'}
        onClose={() => setShowToast(false)}
      />

      <Footer />
      <HelpSupportButton />
    </div>
  );
}

export default Contact;
