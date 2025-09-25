import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import graminsetuLogo from "../assets/images/graminsetu-logo.png";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import Footer from "../components/Footer/Footer";

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
        const res = await axios.get("https://helpful-moonlight-9442b7df97.strapiapp.com/api/jobs");
        setJobs(res.data.data || []);
      } catch (err) {
        setJobsError("Failed to load jobs. Please try again later.");
      } finally {
        setLoadingJobs(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-setu-50 font-sans flex flex-col">
      {/* Nav Bar */}
      <header className="bg-white border-b border-gramin-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <img src={graminsetuLogo} alt="GraminSetu Logo" className="drop-shadow" style={{ width: 48, height: 48, marginTop: 0, marginBottom: 0 }} />
              <span className="text-2xl font-bold text-gramin-700 hidden sm:inline">GraminSetu</span>
            </a>
            <div className="flex items-center space-x-6">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto py-16 px-4">
        <div className="flex flex-col items-center mb-8">
          <img
            src={graminsetuLogo}
            alt="GraminSetu Logo"
            className="drop-shadow"
            style={{ width: 120, height: 120, marginTop: 0, marginBottom: 8, display: 'block' }}
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gramin-700 drop-shadow-sm text-center">Careers</h1>
          <p className="text-lg text-gramin-800 text-center max-w-2xl mb-4">
            Join GraminSetu and help bridge India's villages with technology, transparency, and trust. Explore open positions below and apply to be part of our mission-driven team.
          </p>
        </div>
        {/* Job listings and application form will go here */}
        <div className="w-full" id="job-listings">
          <JobListings jobs={jobs} loading={loadingJobs} error={jobsError} onView={setViewJob} onApply={setApplyJob} />
        </div>
        {/* Application Modal */}
        {applyJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity animate-fadeIn" role="dialog" aria-modal="true" aria-label="Job application form">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative outline-none animate-modalIn" style={{maxHeight:'90vh',overflowY:'auto'}} tabIndex={-1}>
              <button className="absolute top-3 right-3 text-2xl text-gramin-600 hover:text-gramin-900 focus:outline-none" onClick={() => setApplyJob(null)} aria-label="Close application form">&times;</button>
              <JobApplicationForm job={applyJob} jobs={jobs} loadingJobs={loadingJobs} onClose={() => setApplyJob(null)} />
            </div>
          </div>
        )}
        {/* Job Details Modal */}
        {viewJob && <JobModal job={viewJob} onClose={() => setViewJob(null)} />}
      </main>
      <Footer />
    </div>
  );
//
}

// Toast component for showing messages
function Toast({ message, type, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [message, onClose]);
  if (!message) return null;
  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white text-base font-semibold transition-all ${type === 'error' ? 'bg-red-600' : 'bg-gramin-700'}`}>{message}</div>
  );
}

// JobApplicationForm component
function JobApplicationForm({ job, jobs, loadingJobs, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', job: job?.id || '', resume: null });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const fileInputRef = useRef();

  // jobs and loadingJobs are now passed as props

  // If job prop changes, update jobId in form
  useEffect(() => {
    setForm((prev) => ({ ...prev, job: job?.id || '' }));
  }, [job]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setToast({ message: '', type: 'success' });
    try {
      // 1. Upload resume if present
      let resumeId = null;
      if (form.resume) {
        const fileData = new FormData();
        fileData.append('files', form.resume);
        const uploadRes = await axios.post('https://helpful-moonlight-9442b7df97.strapiapp.com/api/upload', fileData);
        // Strapi returns an array of uploaded files
        resumeId = uploadRes.data && Array.isArray(uploadRes.data) && uploadRes.data[0]?.id ? uploadRes.data[0].id : null;
      }
      // 2. Post application JSON
      const payload = {
        data: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          resume: resumeId,
          jobs: {
            connect: [parseInt(form.job, 10)] // Array of job IDs only
          }
        }
      };
      await axios.post('https://helpful-moonlight-9442b7df97.strapiapp.com/api/applications', payload, {
        headers: { 'Content-Type': 'application/json' },
      });
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

  return (
    <>
      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: '', type: toast.type })} />
      <div className="bg-white rounded-2xl shadow-2xl border border-gramin-100 p-0 max-w-2xl mx-auto relative overflow-hidden">
        <div className="bg-gradient-to-r from-gramin-100 to-setu-100 px-8 py-6 border-b border-gramin-200 flex items-center gap-4">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gramin-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0m8 0v2a4 4 0 01-8 0V7m8 0v2a4 4 0 01-8 0V9m8 0v2a4 4 0 01-8 0v2m8 0v2a4 4 0 01-8 0v2m8 0v2a4 4 0 01-8 0v2m8 0v2a4 4 0 01-8 0v2" /></svg>
          <div>
            <h2 className="text-2xl font-bold text-gramin-800 mb-1">Apply for this Job</h2>
            {job && <div className="text-gramin-700 font-semibold text-lg">{job.title || job.Title || ''}</div>}
          </div>
        </div>
        <div className="p-8">
        {submitting && (
          <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-20 rounded-2xl">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gramin-600 mb-2"></div>
            <span className="text-gramin-700 font-semibold">Submitting...</span>
          </div>
        )}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit} aria-busy={submitting} aria-live="polite">
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex-1 text-base font-semibold text-gramin-700">
              Name
              <input type="text" name="name" required value={form.name} onChange={handleChange} className="mt-1 w-full px-4 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white text-lg shadow" placeholder="Your full name" autoFocus />
            </label>
            <label className="flex-1 text-base font-semibold text-gramin-700">
              Email
              <input type="email" name="email" required value={form.email} onChange={handleChange} className="mt-1 w-full px-4 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white text-lg shadow" placeholder="Your email address" />
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex-1 text-base font-semibold text-gramin-700">
              Phone
              <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="mt-1 w-full px-4 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white text-lg shadow" placeholder="Your phone number" />
            </label>
            <label className="flex-1 text-base font-semibold text-gramin-700">
              Job Position
              {job ? (
                <div className="mt-1 w-full px-4 py-3 rounded-lg border border-gramin-200 bg-gray-100 text-gramin-900 text-lg shadow flex items-center">
                  <span>{job.title || job.Title || ''}</span>
                  <input type="hidden" name="job" value={job.id} />
                </div>
              ) : (
                <select name="job" required value={form.job} onChange={handleChange} className="mt-1 w-full px-4 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 bg-white text-lg shadow">
                  <option value="" disabled>{loadingJobs ? 'Loading jobs...' : 'Select a job'}</option>
                  {jobs.filter(j => j.isActive !== false).map((j) => (
                    <option key={j.id} value={j.id}>{j.title || j.Title || ''}</option>
                  ))}
                </select>
              )}
            </label>
          </div>
          <label className="text-base font-semibold text-gramin-700">
            Resume (PDF, DOC, DOCX)
            <input ref={fileInputRef} type="file" name="resume" accept=".pdf,.doc,.docx" required onChange={handleChange} className="mt-1 w-full px-4 py-2 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 bg-white text-lg shadow" />
          </label>
          <button type="submit" disabled={submitting} className="mt-2 bg-gramin-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-gramin-700 focus:ring-2 focus:ring-gramin-400 transition text-lg tracking-wide disabled:opacity-60 disabled:cursor-not-allowed">
            {submitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
        </div>
      </div>
    </>
  );
}



// JobListings component
function JobListings({ jobs, loading, error, onView, onApply }) {
  if (loading) return (
    <div className="flex justify-center items-center py-16">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gramin-600"></div>
      <span className="ml-4 text-gramin-600 text-lg">Loading jobs...</span>
    </div>
  );
  if (error) return <div className="text-center text-red-600 py-8 text-lg font-semibold">{error}</div>;
  if (!jobs.length) return <div className="text-center text-gramin-600 py-8 text-lg font-semibold">No jobs available at the moment.</div>;

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
    <div className="grid gap-10 md:grid-cols-2">
      {jobs.map((job) => {
        return (
          <div
            key={job.id}
            className="bg-white rounded-2xl shadow-xl border border-gramin-100 p-8 flex flex-col transition-transform hover:scale-[1.025] hover:shadow-2xl focus-within:ring-2 focus-within:ring-gramin-400"
            tabIndex={0}
            aria-label={`Job card: ${job.Title || job.title || ''}`}
          >
            <h2 className="text-2xl font-extrabold text-gramin-700 mb-2 tracking-tight">{job.Title || job.title || ''}</h2>
            <div className="flex flex-wrap gap-3 mb-2">
              <span className="inline-flex items-center bg-gramin-50 border border-gramin-200 text-gramin-700 rounded px-3 py-1 text-sm font-medium">
                <span className="font-semibold mr-1">Location:</span> {job.Location || job.location || 'N/A'}
              </span>
              <span className="inline-flex items-center bg-gramin-50 border border-gramin-200 text-gramin-700 rounded px-3 py-1 text-sm font-medium">
                <span className="font-semibold mr-1">Type:</span> {job.JobType || job.type || job.Type || 'N/A'}
              </span>
            </div>
            <p className="text-gramin-800 mb-3 text-base leading-relaxed">
              {Array.isArray(job.Description)
                ? getShortDesc(job.Description)
                : (job.Description || job.description || '')}
              {Array.isArray(job.Description) && getShortDesc(job.Description).length < job.Description.map((d) => d.children?.map((c) => c.text).join(' ')).join(' ').length && (
                <span className="text-gramin-600 cursor-pointer ml-2 underline font-medium" onClick={() => onView(job)} tabIndex={0} role="button" aria-label="Read more about job">Read more</span>
              )}
            </p>
            <div className="flex flex-wrap gap-4 text-gramin-600 text-base mt-auto mb-4">
              {job.isActive === false && (
                <span className="bg-red-100 text-red-700 rounded px-3 py-1 font-medium">Closed</span>
              )}
            </div>
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
                className={`bg-gramin-100 text-gramin-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gramin-200 transition border border-gramin-200 focus:outline-none focus:ring-2 focus:ring-gramin-400 ${job.isActive === false ? 'opacity-60 cursor-not-allowed' : ''}`}
                onClick={() => onApply(job)}
                disabled={job.isActive === false}
                tabIndex={0}
                aria-label={`Apply for ${job.Title || job.title || ''}`}
              >
                Apply
              </button>
            </div>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity animate-fadeIn" role="dialog" aria-modal="true" aria-label={`Job details for ${job.Title || job.title || ''}`}> 
      <div ref={modalRef} tabIndex={-1} className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative outline-none animate-modalIn" style={{maxHeight:'90vh',overflowY:'auto'}}>
        <button className="absolute top-3 right-3 text-2xl text-gramin-600 hover:text-gramin-900 focus:outline-none" onClick={onClose} aria-label="Close job details">&times;</button>
        <h2 className="text-3xl font-bold text-gramin-700 mb-4">{job.Title || job.title || ''}</h2>
        <div className="mb-4 text-gramin-800 whitespace-pre-line">
          {Array.isArray(job.Description)
            ? job.Description.map((d, i) => <p key={i} className="mb-2">{d.children?.map((c, j) => c.text).join(' ')}</p>)
            : (job.Description || job.description || '')}
        </div>
        <div className="flex flex-wrap gap-4 text-gramin-600 text-base mb-4">
          <span className="bg-gramin-100 rounded px-3 py-1">{job.Location || job.location || ''}</span>
          <span className="bg-gramin-100 rounded px-3 py-1">{job.JobType || job.type || job.Type || ''}</span>
        </div>
        <button className="bg-gramin-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gramin-700 transition focus:outline-none focus:ring-2 focus:ring-gramin-400" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Careers;
