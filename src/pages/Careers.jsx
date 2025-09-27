import React, { useEffect, useState, useRef } from 'react';
import * as yup from 'yup';
import applicationValidationSchema from '../validation/formsvalidation';
import axios from 'axios';
import Navbar from '../components/Navbar';
// import LanguageSelector from '../components/LanguageSelector/LanguageSelector';
import Footer from '../components/Footer/Footer';
import Toast from '../components/Toast';

// ...other code (hooks, helpers, etc.)

// JobApplicationForm component
function JobApplicationForm({ job, jobs, loadingJobs, onClose }) {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    job: job?.id || '',
    resume: null,
  });
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);
  const [toast, setToast] = React.useState({ message: '', type: 'success' });
  const fileInputRef = React.useRef();

  React.useEffect(() => {
    setForm((prev) => ({ ...prev, job: job?.id || '' }));
  }, [job]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'phone') {
      // Only allow numbers, max 10 digits
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setForm((prev) => ({ ...prev, phone: digits }));
    } else {
      setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    }
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setToast({ message: '', type: 'success' });
    try {
      await applicationValidationSchema.validate(form, { abortEarly: false });
    } catch (validationError) {
      const newErrors = {};
      if (validationError.inner) {
        validationError.inner.forEach((err) => {
          if (err.path) newErrors[err.path] = err.message;
        });
      }
      setErrors(newErrors);
      setSubmitting(false);
      return;
    }
    try {
      let resumeId = null;
      if (form.resume) {
        const fileData = new FormData();
        fileData.append('files', form.resume);
        const uploadRes = await axios.post(
          'https://helpful-moonlight-9442b7df97.strapiapp.com/api/upload',
          fileData
        );
        resumeId =
          uploadRes.data && Array.isArray(uploadRes.data) && uploadRes.data[0]?.id
            ? uploadRes.data[0].id
            : null;
      }
      const payload = {
        data: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          resume: resumeId,
          jobs: {
            connect: [parseInt(form.job, 10)],
          },
        },
      };
      await axios.post(
        'https://helpful-moonlight-9442b7df97.strapiapp.com/api/applications',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );
      setToast({ message: 'Application submitted successfully!', type: 'success' });
      setForm({ name: '', email: '', phone: '', job: job?.id || '', resume: null });
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTimeout(() => {
        if (onClose) onClose();
      }, 1200);
    } catch (err) {
      setToast({ message: 'Failed to submit application. Please try again.', type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  // Helper for floating label
  // Improved floating label for better placeholder and alignment
  // Floating label with no placeholder, perfect alignment
  const floatingLabel = (label, id, input, required) => {
    const value = input.props.value || '';
    const isNotEmpty = value && value.length > 0;
    return (
      <div className="relative mb-3">
        {React.cloneElement(input, {
          className:
            (input.props.className || '') +
            ' peer block w-full px-4 py-3 rounded-xl border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 bg-white text-lg shadow-sm' +
            (isNotEmpty ? ' not-empty' : ''),
        })}
        <label
          htmlFor={id}
          className={
            'absolute left-4 bg-white px-1 text-gramin-700 text-base font-semibold pointer-events-none transition-all duration-200 origin-left top-1/2 -translate-y-1/2' +
            ' peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-gramin-600' +
            ' not-empty:-translate-y-7 not-empty:text-xs not-empty:text-gramin-600'
          }
          style={{
            ...(isNotEmpty
              ? { transform: 'translateY(-1.75rem)', fontSize: '0.75rem', color: '#2563eb' }
              : {}),
          }}
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      </div>
    );
  };
  return (
    <div>
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: toast.type })}
      />
      <div className="bg-white rounded-xl border border-gramin-200 p-0 max-w-xl mx-auto relative overflow-hidden">
        {/* Branding and intro */}
        <div className="flex flex-col items-center justify-center px-8 py-6 border-b border-gramin-200 bg-gradient-to-r from-gramin-50 to-gramin-100">
          <div className="mb-2">
            <img
              src={require('../assets/images/graminsetu-logo.png')}
              alt="GraminSetu Logo"
              className="w-20 h-20 rounded shadow-sm"
              width="32"
              height="32"
            />
          </div>
          <h2 className="text-xl font-bold text-gramin-700 mb-1 tracking-tight text-center">
            Apply to GraminSetu
          </h2>
          <p className="text-sm text-gramin-700 text-center mb-2">
            Please fill out the form below to apply for this role.
          </p>
          {job && (
            <div className="text-gramin-600 font-medium text-base text-center">
              {job.title || job.Title || ''}
            </div>
          )}
        </div>
        <div className="p-6 bg-white">
          {submitting && (
            <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-20 rounded-3xl">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-setu-600 mb-2"></div>
              <span className="text-setu-700 font-semibold text-lg">Submitting...</span>
            </div>
          )}
          <form
            className="flex flex-col gap-1"
            onSubmit={handleSubmit}
            aria-busy={submitting}
            aria-live="polite"
            autoComplete="on"
          >
            {/* Name */}
            <div className="relative mb-3">
              <input
                id="name"
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                autoFocus
                aria-required="true"
                aria-label="Full Name"
                className={
                  'peer block w-full px-4 py-3 rounded-xl border border-gramin-200 focus:border-gramin-600 focus:ring-2 focus:ring-gramin-400 text-gramin-900 bg-white text-lg shadow-sm outline-none' +
                  (form.name ? ' not-empty' : '')
                }
                placeholder=""
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-gramin-700 text-base font-semibold pointer-events-none transition-all duration-200 origin-left peer-focus:-translate-y-9 peer-focus:text-xs peer-focus:text-gramin-600 not-empty:-translate-y-9 not-empty:text-xs not-empty:text-gramin-600"
                style={
                  form.name
                    ? {
                        transform: 'translateY(-2.35rem)',
                        fontSize: '0.75rem',
                        color: '#2563eb',
                        background: '#fff',
                      }
                    : { background: '#fff' }
                }
              >
                Name <span className="text-red-500">*</span>
              </label>
              {errors.name && (
                <div className="absolute left-0 w-full mt-1 text-xs text-red-600 font-semibold">
                  {errors.name}
                </div>
              )}
            </div>
            {/* Email */}
            <div className="relative mb-3">
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                aria-required="true"
                aria-label="Email Address"
                className={
                  'peer block w-full px-4 py-3 rounded-xl border border-gramin-200 focus:border-gramin-600 focus:ring-2 focus:ring-gramin-400 text-gramin-900 bg-white text-lg shadow-sm outline-none' +
                  (form.email ? ' not-empty' : '')
                }
                placeholder=""
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-gramin-700 text-base font-semibold pointer-events-none transition-all duration-200 origin-left peer-focus:-translate-y-9 peer-focus:text-xs peer-focus:text-gramin-600 not-empty:-translate-y-9 not-empty:text-xs not-empty:text-gramin-600"
                style={
                  form.email
                    ? {
                        transform: 'translateY(-2.35rem)',
                        fontSize: '0.75rem',
                        color: '#2563eb',
                        background: '#fff',
                      }
                    : { background: '#fff' }
                }
              >
                Email <span className="text-red-500">*</span>
              </label>
              {errors.email && (
                <div className="absolute left-0 w-full mt-1 text-xs text-red-600 font-semibold">
                  {errors.email}
                </div>
              )}
            </div>
            {/* Phone */}
            <div className="relative mb-3">
              <div className="flex items-center">
                <span className="inline-block px-3 py-3 rounded-l-xl border border-gramin-200 bg-gramin-50 text-gramin-700 font-semibold select-none h-[52px] flex items-center">
                  +91
                </span>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Phone Number"
                  className={
                    'peer block w-full px-4 py-3 rounded-r-xl border-t border-b border-r border-gramin-200 focus:border-gramin-600 focus:ring-2 focus:ring-gramin-400 text-gramin-900 bg-white text-lg shadow-sm outline-none h-[52px]' +
                    (form.phone ? ' not-empty' : '')
                  }
                  maxLength={10}
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder=""
                  style={{ borderLeft: 'none', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                />
                {/* Floating label for phone field, covers both prefix and input */}
                <label
                  htmlFor="phone"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-1 text-gramin-700 text-base font-semibold pointer-events-none transition-all duration-200 origin-left peer-focus:-translate-y-9 peer-focus:text-xs peer-focus:text-gramin-600 not-empty:-translate-y-9 not-empty:text-xs not-empty:text-gramin-600"
                  style={
                    form.phone
                      ? {
                          transform: 'translateY(-2.35rem)',
                          fontSize: '0.75rem',
                          color: '#2563eb',
                          left: '3.5rem',
                          background: '#fff',
                        }
                      : { left: '3.5rem', background: '#fff' }
                  }
                >
                  Phone <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.phone && (
                <div className="absolute left-0 w-full mt-1 text-xs text-red-600 font-semibold">
                  {errors.phone}
                </div>
              )}
            </div>
            {/* Job Position */}
            {/* Job Position - show only the job clicked, not a dropdown */}
            <div className="mb-3">
              <label htmlFor="job" className="block text-base font-semibold text-gramin-700 mb-1">
                Job Position <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center px-4 py-3 rounded-xl border border-gramin-200 bg-gramin-50 text-gramin-900 text-lg shadow-sm font-bold">
                <span>{job?.title || job?.Title || ''}</span>
                <input type="hidden" name="job" value={job?.id || ''} />
              </div>
            </div>
            {/* Resume Upload */}
            <div className="mb-3">
              <label
                htmlFor="resume"
                className="block text-base font-semibold text-gramin-700 mb-1"
              >
                Resume <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col gap-2">
                <input
                  ref={fileInputRef}
                  id="resume"
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border border-gramin-200 focus:ring-2 focus:ring-gramin-400 bg-white text-lg shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gramin-100 file:text-gramin-700 hover:file:bg-gramin-200"
                  aria-required="true"
                  aria-label="Resume Upload"
                />
                <span className="text-xs text-gramin-500">
                  Supported formats: PDF, DOC, DOCX. Max 5MB.
                </span>
                {errors.resume && (
                  <div className="mt-1 text-xs text-red-600 font-semibold">{errors.resume}</div>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 bg-gramin-600 text-white font-semibold px-8 py-2 rounded hover:bg-gramin-700 focus:ring-2 focus:ring-gramin-400 transition text-base tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-gramin-700"
              aria-label="Submit Application"
            >
              {submitting ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>{' '}
                  Submitting...
                </>
              ) : (
                <>Submit Application</>
              )}
            </button>
          </form>
          {/* Confirmation message after submit */}
          {toast.message && toast.type === 'success' && (
            <div className="mt-4 p-3 bg-setu-50 border border-setu-200 rounded text-setu-800 text-center text-base font-medium">
              Thank you for applying! We’ve received your application and will be in touch soon.
              <br />
              <span className="text-sm text-gramin-700">
                If you have questions, email{' '}
                <a
                  href="mailto:support@graminsetu.in"
                  className="underline text-gramin-700 hover:text-gramin-900"
                >
                  support@graminsetu.in
                </a>
                .
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// JobListings component
function JobListings({ jobs, loading, error, onView, onApply }) {
  if (loading)
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gramin-600"></div>
        <span className="ml-4 text-gramin-600 text-lg">Loading jobs...</span>
      </div>
    );
  if (error)
    return <div className="text-center text-red-600 py-8 text-lg font-semibold">{error}</div>;
  if (!jobs.length)
    return (
      <div className="text-center text-gramin-600 py-8 text-lg font-semibold">
        No jobs available at the moment.
      </div>
    );

  // Helper to get short description
  const getShortDesc = (descArr) => {
    if (!Array.isArray(descArr)) return '';
    let chars = 0;
    let out = [];
    for (let i = 0; i < descArr.length; i++) {
      const para = descArr[i].children?.map((c) => c.text).join(' ');
      if (chars + para.length > 180) {
        out.push(para.slice(0, 180 - chars) + '...');
        break;
      }
      out.push(para);
      chars += para.length;
      if (chars > 180) break;
    }
    return out.join(' ');
  };

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 justify-items-stretch items-stretch">
      {jobs.map((job) => {
        const isClosed = job.isActive === false;
        return (
          <div
            key={job.id}
            className={`relative group bg-white rounded-3xl shadow-xl border border-gramin-100 p-8 flex flex-col items-start transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-gramin-300 focus-within:ring-2 focus-within:ring-gramin-400 ${isClosed ? 'opacity-70 grayscale' : ''} w-full max-w-[520px] min-w-[320px] mx-auto md:mx-0 md:w-[98%]`}
            style={{ minHeight: 370, marginBottom: 0 }}
            tabIndex={0}
            aria-label={`Job card: ${job.Title || job.title || ''}`}
          >
            {/* Icon and badge row */}
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gramin-100 to-gramin-200 shadow text-3xl">
                {isClosed ? '🔒' : '💼'}
              </span>
              <span
                className={`ml-auto px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm ${isClosed ? 'bg-red-100 text-red-700' : 'bg-gramin-50 text-gramin-700'}`}
              >
                {isClosed ? 'Closed' : 'Open'}
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-gramin-700 mb-2 tracking-tight group-hover:text-gramin-800 transition-colors">
              {job.Title || job.title || ''}
            </h2>
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="inline-flex items-center bg-gramin-50 border border-gramin-200 text-gramin-700 rounded-full px-3 py-1 text-sm font-medium">
                <span className="font-semibold mr-1">📍</span>{' '}
                {job.Location || job.location || 'N/A'}
              </span>
              <span className="inline-flex items-center bg-gramin-100 border border-gramin-200 text-gramin-800 rounded-full px-3 py-1 text-sm font-medium">
                <span className="font-semibold mr-1">🕒</span>{' '}
                {job.JobType || job.type || job.Type || 'N/A'}
              </span>
            </div>
            <p className="text-gramin-800 mb-4 text-base leading-relaxed min-h-[60px]">
              {Array.isArray(job.Description)
                ? getShortDesc(job.Description)
                : job.Description || job.description || ''}
              {Array.isArray(job.Description) &&
                getShortDesc(job.Description).length <
                  job.Description.map((d) => d.children?.map((c) => c.text).join(' ')).join(' ')
                    .length && (
                  <span
                    className="text-gramin-600 cursor-pointer ml-2 underline font-medium"
                    onClick={() => onView(job)}
                    tabIndex={0}
                    role="button"
                    aria-label="Read more about job"
                  >
                    Read more
                  </span>
                )}
            </p>
            <div className="flex gap-4 mt-auto">
              <button
                className="bg-gramin-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-gramin-700 transition focus:outline-none focus:ring-2 focus:ring-gramin-400"
                onClick={() => onView(job)}
                tabIndex={0}
                aria-label={`View details for ${job.Title || job.title || ''}`}
              >
                View
              </button>
              <button
                className={`bg-gramin-100 text-gramin-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gramin-200 transition border border-gramin-200 focus:outline-none focus:ring-2 focus:ring-gramin-400 ${isClosed ? 'opacity-60 cursor-not-allowed' : ''}`}
                onClick={() => onApply(job)}
                disabled={isClosed}
                tabIndex={0}
                aria-label={`Apply for ${job.Title || job.title || ''}`}
              >
                Apply
              </button>
            </div>
            {/* Decorative animated border */}
            <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gramin-400 group-hover:shadow-lg transition-all duration-300"></span>
          </div>
        );
      })}
    </div>
  );
}

// JobModal component for viewing full job details
function JobModal({ job, onClose }) {
  const modalRef = useRef(null);
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  if (!job) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`Job details for ${job.Title || job.title || ''}`}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-10 relative outline-none animate-modalIn border border-gramin-200"
        style={{ maxHeight: '92vh', overflowY: 'auto' }}
      >
        <button
          className="absolute top-3 right-3 text-2xl text-gramin-600 hover:text-gramin-900 focus:outline-none"
          onClick={onClose}
          aria-label="Close job details"
        >
          &times;
        </button>
        <h2 className="text-4xl font-extrabold text-gramin-700 mb-2 text-center">
          {job.Title || job.title || ''}
        </h2>
        <div className="flex flex-wrap gap-4 justify-center text-gramin-600 text-base mb-6">
          <span className="bg-gramin-100 rounded px-4 py-1 font-semibold">
            📍 {job.Location || job.location || 'Location: N/A'}
          </span>
          <span className="bg-gramin-100 rounded px-4 py-1 font-semibold">
            🕒 {job.JobType || job.type || job.Type || 'Type: N/A'}
          </span>
        </div>
        <div className="mb-6 text-gramin-800 whitespace-pre-line text-lg leading-relaxed">
          {Array.isArray(job.Description)
            ? job.Description.map((d, i) => (
                <p key={i} className="mb-2">
                  {d.children?.map((c, j) => c.text).join(' ')}
                </p>
              ))
            : job.Description || job.description || ''}
        </div>
        {/* Optionally show responsibilities, skills, benefits if available */}
        {job.Responsibilities &&
          Array.isArray(job.Responsibilities) &&
          job.Responsibilities.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gramin-700 mb-2">Key Responsibilities</h3>
              <ul className="list-disc pl-6 text-base text-gramin-800">
                {job.Responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        {job.Skills && Array.isArray(job.Skills) && job.Skills.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gramin-700 mb-2">Required Skills</h3>
            <ul className="list-disc pl-6 text-base text-gramin-800">
              {job.Skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
        {job.Benefits && Array.isArray(job.Benefits) && job.Benefits.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gramin-700 mb-2">Benefits</h3>
            <ul className="list-disc pl-6 text-base text-gramin-800">
              {job.Benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            className="bg-gramin-600 text-white px-8 py-3 rounded-xl font-bold shadow hover:bg-gramin-700 transition focus:outline-none focus:ring-2 focus:ring-gramin-400 text-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Careers() {
  const [viewJob, setViewJob] = useState(null);
  const [applyJob, setApplyJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [jobsError, setJobsError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoadingJobs(true);
      setJobsError(null);
      try {
        const res = await axios.get('https://helpful-moonlight-9442b7df97.strapiapp.com/api/jobs');
        setJobs(res.data.data || []);
      } catch (err) {
        setJobsError('Failed to load jobs. Please try again later.');
      } finally {
        setLoadingJobs(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-setu-50 font-sans flex flex-col">
      {/* Nav Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className=" pt-0 relative w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 bg-gradient-to-br from-gramin-50 via-white to-gramin-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none pt-0"></div>
        <img
          src={require('../assets/images/graminsetu-logo.png')}
          alt="GraminSetu Logo"
          className="drop-shadow animate-fade-in"
          style={{ width: 230, height: 230, marginTop: -100, marginBottom: -20, display: 'block' }}
        />
        <h1 className="text-5xl md:text-6xl font-black mb-4 text-gramin-700 drop-shadow-lg text-center tracking-tight animate-fade-in">
          Careers at GraminSetu
        </h1>
        <p className="text-xl md:text-2xl text-gramin-700 text-center max-w-2xl mb-6 animate-fade-in delay-100">
          Join <span className="text-gramin-600 font-bold">GraminSetu</span> and help bridge India's
          villages with <span className="text-gramin-700 font-bold">technology</span>,{' '}
          <span className="text-gramin-500 font-bold">transparency</span>, and{' '}
          <span className="text-gramin-800 font-bold">trust</span>.<br />
          <span className="text-gramin-700">
            Explore open positions below and apply to be part of our mission-driven team.
          </span>
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-200">
          <span className="inline-flex items-center bg-gramin-50 border border-gramin-200 text-gramin-700 rounded-full px-5 py-2 text-lg font-semibold shadow-sm">
            🌱 Impact Rural India
          </span>
          <span className="inline-flex items-center bg-gramin-100 border border-gramin-200 text-gramin-800 rounded-full px-5 py-2 text-lg font-semibold shadow-sm">
            🤝 Inclusive Culture
          </span>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto py-12 px-2 md:px-6">
        {/* Job listings and application form will go here */}
        <div className="w-full" id="job-listings">
          <JobListings
            jobs={jobs}
            loading={loadingJobs}
            error={jobsError}
            onView={setViewJob}
            onApply={setApplyJob}
          />
        </div>
        {/* Application Modal */}
        {applyJob && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-label="Job application form"
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative outline-none animate-modalIn"
              style={{ maxHeight: '90vh', overflowY: 'auto' }}
              tabIndex={-1}
            >
              <button
                className="absolute top-3 right-3 text-2xl text-gramin-600 hover:text-gramin-900 focus:outline-none"
                onClick={() => setApplyJob(null)}
                aria-label="Close application form"
              >
                &times;
              </button>
              <JobApplicationForm
                job={applyJob}
                jobs={jobs}
                loadingJobs={loadingJobs}
                onClose={() => setApplyJob(null)}
              />
            </div>
          </div>
        )}
        {/* Job Details Modal */}
        {viewJob && <JobModal job={viewJob} onClose={() => setViewJob(null)} />}
      </main>
      <Footer />
    </div>
  );
}

export default Careers;
