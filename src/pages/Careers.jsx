import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Logo from "../components/Logo/Logo";
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
              <Logo size="lg" showText={true} />
            </a>
            <div className="flex items-center space-x-6">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className=" pt-0 relative w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 bg-gradient-to-br from-gramin-50 via-white to-gramin-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none pt-0">
        </div>
        <img
          src={graminsetuLogo}
          alt="GraminSetu Logo"
          className="drop-shadow animate-fade-in"
          style={{ width: 230, height: 230, marginTop: -100, marginBottom: -20, display: 'block' }}
        />
        <h1 className="text-5xl md:text-6xl font-black mb-4 text-gramin-700 drop-shadow-lg text-center tracking-tight animate-fade-in">Careers at GraminSetu</h1>
        <p className="text-xl md:text-2xl text-gramin-700 text-center max-w-2xl mb-6 animate-fade-in delay-100">
          Join <span className="text-gramin-600 font-bold">GraminSetu</span> and help bridge India's villages with <span className="text-gramin-700 font-bold">technology</span>, <span className="text-gramin-500 font-bold">transparency</span>, and <span className="text-gramin-800 font-bold">trust</span>.<br/>
          <span className="text-gramin-700">Explore open positions below and apply to be part of our mission-driven team.</span>
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-200">
          <span className="inline-flex items-center bg-gramin-50 border border-gramin-200 text-gramin-700 rounded-full px-5 py-2 text-lg font-semibold shadow-sm">🌱 Impact Rural India</span>
          <span className="inline-flex items-center bg-gramin-100 border border-gramin-200 text-gramin-800 rounded-full px-5 py-2 text-lg font-semibold shadow-sm">🤝 Inclusive Culture</span>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto py-12 px-2 md:px-6">
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
      <div className="bg-white rounded-3xl shadow-xl border border-gramin-100 p-0 max-w-2xl mx-auto relative overflow-hidden animate-fade-in">
        <div className="bg-gradient-to-r from-gramin-50 to-gramin-100 px-10 py-8 border-b border-gramin-200 flex items-center gap-4 relative">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gramin-100 to-gramin-200 shadow text-3xl mr-2">✍️</span>
          <div>
            <h2 className="text-3xl font-black text-gramin-700 mb-1 tracking-tight">Apply for this Job</h2>
            {job && <div className="text-gramin-600 font-semibold text-lg">{job.title || job.Title || ''}</div>}
          </div>
        </div>
        <div className="p-10 bg-white">
        {submitting && (
          <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-20 rounded-3xl">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-setu-600 mb-2"></div>
            <span className="text-setu-700 font-semibold text-lg">Submitting...</span>
          </div>
        )}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit} aria-busy={submitting} aria-live="polite">
          <div className="flex flex-col md:flex-row gap-6">
            <label className="flex-1 text-base font-semibold text-gramin-700">
              Name
              <input type="text" name="name" required value={form.name} onChange={handleChange} className="mt-1 w-full px-5 py-3 rounded-xl border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white text-lg shadow-sm" placeholder="Your full name" autoFocus />
            </label>
            <label className="flex-1 text-base font-semibold text-gramin-700">
              Email
              <input type="email" name="email" required value={form.email} onChange={handleChange} className="mt-1 w-full px-5 py-3 rounded-xl border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white text-lg shadow-sm" placeholder="Your email address" />
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <label className="flex-1 text-base font-semibold text-gramin-700">
              Phone
              <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="mt-1 w-full px-5 py-3 rounded-xl border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 placeholder-gramin-400 bg-white text-lg shadow-sm" placeholder="Your phone number" />
            </label>
            <label className="flex-1 text-base font-semibold text-gramin-700">
              Job Position
              {job ? (
                <div className="mt-1 w-full px-5 py-3 rounded-xl border border-gramin-200 bg-gramin-50 text-gramin-900 text-lg shadow flex items-center">
                  <span>{job.title || job.Title || ''}</span>
                  <input type="hidden" name="job" value={job.id} />
                </div>
              ) : (
                <select name="job" required value={form.job} onChange={handleChange} className="mt-1 w-full px-5 py-3 rounded-xl border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-gramin-900 bg-white text-lg shadow-sm">
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
            <input ref={fileInputRef} type="file" name="resume" accept=".pdf,.doc,.docx" required onChange={handleChange} className="mt-1 w-full px-5 py-3 rounded-xl border border-gramin-200 focus:ring-2 focus:ring-gramin-400 bg-white text-lg shadow-sm" />
          </label>
          <button type="submit" disabled={submitting} className="mt-2 bg-gramin-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-gramin-700 focus:ring-2 focus:ring-gramin-400 transition text-lg tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {submitting ? (<><span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span> Submitting...</>) : (<><span>🚀</span>Submit Application</>)}
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
  <div className="grid gap-10 grid-cols-1 md:grid-cols-2 justify-items-center items-stretch">
      {jobs.map((job) => {
        const isClosed = job.isActive === false;
        return (
          <div
            key={job.id}
            className={`relative group bg-white rounded-3xl shadow-xl border border-gramin-100 p-8 flex flex-col items-start transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-gramin-300 focus-within:ring-2 focus-within:ring-gramin-400 ${isClosed ? 'opacity-70 grayscale' : ''} w-full max-w-[380px] min-w-[270px] mx-auto md:mx-0 md:w-[95%]`}
            style={{ minHeight: 370, marginBottom: 0 }}
            tabIndex={0}
            aria-label={`Job card: ${job.Title || job.title || ''}`}
          >
            {/* Icon and badge row */}
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gramin-100 to-gramin-200 shadow text-3xl">
                {isClosed ? '🔒' : '💼'}
              </span>
              <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm ${isClosed ? 'bg-red-100 text-red-700' : 'bg-gramin-50 text-gramin-700'}`}>{isClosed ? 'Closed' : 'Open'}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-gramin-700 mb-2 tracking-tight group-hover:text-gramin-800 transition-colors">{job.Title || job.title || ''}</h2>
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="inline-flex items-center bg-gramin-50 border border-gramin-200 text-gramin-700 rounded-full px-3 py-1 text-sm font-medium">
                <span className="font-semibold mr-1">📍</span> {job.Location || job.location || 'N/A'}
              </span>
              <span className="inline-flex items-center bg-gramin-100 border border-gramin-200 text-gramin-800 rounded-full px-3 py-1 text-sm font-medium">
                <span className="font-semibold mr-1">🕒</span> {job.JobType || job.type || job.Type || 'N/A'}
              </span>
            </div>
            <p className="text-gramin-800 mb-4 text-base leading-relaxed min-h-[60px]">
              {Array.isArray(job.Description)
                ? getShortDesc(job.Description)
                : (job.Description || job.description || '')}
              {Array.isArray(job.Description) && getShortDesc(job.Description).length < job.Description.map((d) => d.children?.map((c) => c.text).join(' ')).join(' ').length && (
                <span className="text-gramin-600 cursor-pointer ml-2 underline font-medium" onClick={() => onView(job)} tabIndex={0} role="button" aria-label="Read more about job">Read more</span>
              )}
            </p>
            <div className="flex gap-4 mt-auto">
              <button
                className="bg-gramin-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-gramin-700 transition focus:outline-none focus:ring-2 focus:ring-gramin-400"
                onClick={() => onView(job)}
                tabIndex={0}
                aria-label={`View details for ${job.Title || job.title || ''}`}
              >
                <span className="mr-2">🔎</span>View
              </button>
              <button
                className={`bg-gramin-100 text-gramin-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gramin-200 transition border border-gramin-200 focus:outline-none focus:ring-2 focus:ring-gramin-400 ${isClosed ? 'opacity-60 cursor-not-allowed' : ''}`}
                onClick={() => onApply(job)}
                disabled={isClosed}
                tabIndex={0}
                aria-label={`Apply for ${job.Title || job.title || ''}`}
              >
                <span className="mr-2">✍️</span>Apply
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
