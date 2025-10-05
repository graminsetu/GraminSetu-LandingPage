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
              {/* Email */}
              <div className="flex items-center gap-4 text-lg">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-gramin-600" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-gramin-700">Email:</span>
                  <a
                    href="mailto:support@graminsetu.in"
                    className="text-gramin-600 underline hover:text-gramin-800 transition-colors duration-200"
                  >
                    support@graminsetu.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 text-lg">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-gramin-600" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-gramin-700">Phone:</span>
                  <a
                    href="tel:+919704635156"
                    className="text-gramin-600 underline hover:text-gramin-800 transition-colors duration-200"
                  >
                    +91-9704635156
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 text-lg">
                <div className="flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-gramin-600" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-gramin-700">WhatsApp:</span>
                  <a
                    href="https://wa.me/919704635156"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gramin-600 underline hover:text-gramin-800 transition-colors duration-200"
                  >
                    +91-9704635156
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4 text-lg">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gramin-600 mt-1" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-gramin-700">Office Address:</span>
                  <span className="text-gramin-600 leading-relaxed">
                    Visakhapatnam, Andhra Pradesh, India
                  </span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 text-lg">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-gramin-600 mt-1" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-gramin-700">Business Hours:</span>
                  <div className="text-gramin-600 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM (IST)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Saturday - Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-8 pt-6 border-t border-gramin-100">
              <h3 className="text-xl font-semibold mb-4 text-gramin-800">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/graminsetu/"
                  aria-label="LinkedIn"
                  className="group flex items-center justify-center w-12 h-12 bg-gramin-50 rounded-full text-gramin-600 hover:bg-gramin-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/graminsetu"
                  aria-label="Twitter"
                  className="group flex items-center justify-center w-12 h-12 bg-gramin-50 rounded-full text-gramin-600 hover:bg-gramin-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <button
                  disabled
                  aria-label="Facebook (Coming Soon)"
                  className="group flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-gray-400 cursor-not-allowed shadow-sm"
                  title="Coming Soon"
                >
                  <Facebook className="w-6 h-6" />
                </button>
                <button
                  disabled
                  aria-label="Instagram (Coming Soon)"
                  className="group flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-gray-400 cursor-not-allowed shadow-sm"
                  title="Coming Soon"
                >
                  <Instagram className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm text-gramin-500 mt-4">
                Follow us on social media for updates and news about rural development initiatives.
              </p>
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
