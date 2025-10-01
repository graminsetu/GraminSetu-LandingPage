import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  User,
  MessageSquare,
  Type,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PageTitle from '../components/PageTitle';
import Toast from '../components/Toast';

// Initial state for the contact form
const initialFormState = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const location = useLocation();
  const [form, setForm] = React.useState(initialFormState);
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState(null);
  const [showToast, setShowToast] = React.useState(false);

  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await axios.post(
        `${process.env.REACT_APP_STRAPI_API_URL}/contacts`,
        {
          data: {
            name: form.name,
            email: form.email,
            subject: form.subject,
            messages: form.message,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setStatus({
        type: 'success',
        message: 'Thank you for contacting us! We will get back to you soon.',
      });
      setForm(initialFormState);
      setShowToast(true);
    } catch (err) {
      // Show a more detailed error if available
      const errorMsg =
        err?.response?.data?.error?.message ||
        'There was a problem submitting your message. Please try again.';
      setStatus({ type: 'error', message: errorMsg });
      setShowToast(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-setu-50 font-sans flex flex-col">
      <PageTitle pathname={location.pathname} />

      {/* Navbar */}
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* ...existing code... */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="bg-white/95 rounded-2xl shadow-xl p-8 flex flex-col justify-between border border-gramin-100 w-full h-full">
            <h2 className="text-3xl font-bold mb-6 text-gramin-800 flex items-center gap-2">
              <MessageSquare className="w-8 h-8 text-gramin-600" /> Our Contact Details
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-lg">
                <Mail className="w-6 h-6 text-gramin-600" />
                <span className="font-semibold text-gramin-700">Email:</span>
                <a
                  href="mailto:support@graminsetu.in"
                  className="text-gramin-600 underline hover:text-gramin-800"
                >
                  support@graminsetu.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-lg justify-center">
                <Phone className="w-6 h-6 text-gramin-600" />
                <span className="font-semibold text-gramin-700">Phone:</span>
                <a
                  href="tel:+919704635156"
                  className="text-gramin-600 underline hover:text-gramin-800"
                >
                  +91-9704635156
                </a>
              </div>
              <div className="flex items-start gap-3 text-lg">
                <MapPin className="w-7 h-7 text-gramin-600 mt-1" />
                <span>
                  <span className="font-semibold text-gramin-700">Office Address:</span>{' '}
                  Visakhapatnam, Andhra Pradesh, India
                </span>
              </div>
              <div className="flex items-start gap-3 text-lg justify-center">
                <Clock className="w-7 h-7 text-gramin-600 mt-1" />
                <span>
                  <span className="font-semibold text-gramin-700">Business Hours:</span> <br />
                  Monday - Friday: 9:00 AM - 6:00 PM (IST)
                  <br />
                  Saturday - Sunday: Closed
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 text-gramin-800">Connect With Us</h3>
              <div className="flex space-x-5">
                <a
                  href="https://www.linkedin.com/company/graminsetu/"
                  aria-label="LinkedIn"
                  className="text-gramin-600 hover:text-gramin-800 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/company/graminsetu/?viewAsMember=true"
                  aria-label="Twitter"
                  className="text-gramin-600 hover:text-gramin-800 transition"
                >
                  <Twitter className="w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/company/graminsetu/?viewAsMember=true"
                  aria-label="Facebook"
                  className="text-gramin-600 hover:text-gramin-800 transition"
                >
                  <Facebook className="w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/company/graminsetu/?viewAsMember=true"
                  aria-label="Instagram"
                  className="text-gramin-600 hover:text-gramin-800 transition"
                >
                  <Instagram className="w-7 h-7" />
                </a>
              </div>
              please check carrier page
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-white/95 rounded-2xl shadow-xl p-8 flex flex-col gap-5 border border-gramin-100 w-full h-full"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-bold mb-6 text-gramin-800 flex items-center gap-2">
              <MessageSquare className="w-8 h-8 text-gramin-600" /> Send Us a Message
            </h2>
            <div className="flex flex-col gap-5">
              <label className="text-base font-semibold text-gramin-700">
                <span className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gramin-600" /> Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white text-lg shadow"
                  value={form.name}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </label>
              <label className="text-base font-semibold text-gramin-700">
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gramin-600" /> Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white text-lg shadow"
                  value={form.email}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </label>
              <label className="text-base font-semibold text-gramin-700">
                <span className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-gramin-600" /> Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject of your message"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white text-lg shadow"
                  value={form.subject}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </label>
              <label className="text-base font-semibold text-gramin-700">
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-gramin-600" /> Message
                </span>
                <textarea
                  name="message"
                  required
                  placeholder="Write your message here"
                  rows={6}
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white text-lg shadow resize-none"
                  value={form.message}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 bg-gramin-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-gramin-700 focus:ring-2 focus:ring-gramin-400 transition text-lg tracking-wide"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            {/* Toast notification for success or error */}
            <Toast
              message={showToast ? status?.message : ''}
              type={status?.type === 'error' ? 'error' : 'success'}
              onClose={() => setShowToast(false)}
            />
            <p className="text-xs text-gramin-500 mt-3 text-center">
              Your message is confidential. We respect your privacy.
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
