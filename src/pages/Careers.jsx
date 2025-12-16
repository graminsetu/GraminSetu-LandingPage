import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import PageTitle from '../components/PageTitle';
import HelpSupportButton from '../components/HelpSupport/HelpSupportButton';
import Toast from '../components/Toast';
import {
  Briefcase,
  MapPin,
  Clock,
  X,
  Upload,
  CheckCircle,
  ChevronRight,
  Search,
  Users,
  Code,
  Truck,
  PenTool,
  Rocket,
  Sprout,
  Heart,
  Zap,
  TrendingUp,
  Monitor,
  ClipboardList,
  Palette,
  Target,
} from 'lucide-react';
import './Careers.scss';

// Mock Data Configuration
const MOCK_JOBS = [
  {
    id: 1,
    title: 'Village Relationship Manager',
    location: 'Remote / Field (Bihar)',
    type: 'Full-time',
    description:
      'We are looking for a passionate relationship manager to build trust and network within rural communities. You will be the face of GraminSetu, helping farmers and local businesses onboard our platform.',
    responsibilities: [
      'Conduct community meetings to explain GraminSetu benefits.',
      'Onboard 50+ farmers and 10+ local businesses monthly.',
      'Provide first-level support to users in local dialects.',
      'Gather feedback and report to the central product team.',
    ],
    requirements: [
      'Fluency in Hindi and local dialects (Maithili/Bhojpuri preferred).',
      '1-2 years of experience in sales, community mobilization, or NGO work.',
      'Smartphone savvy and comfortable with digital tools.',
      'Willingness to travel extensively within the assigned district.',
    ],
    benefits: [
      'Competitive salary + performance incentives.',
      'Travel allowance and health insurance.',
      'Opportunity to make a tangible impact on rural lives.',
    ],
    isActive: true,
  },
  {
    id: 2,
    title: 'Senior Frontend Engineer',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    description:
      'Join our core tech team to build accessible, low-bandwidth optimized web interfaces for rural India. You will work on React.js and modern web technologies to ensure our platform is fast and intuitive.',
    responsibilities: [
      'Develop responsive web pages optimized for low-end devices.',
      'Collaborate with UX designers to implement accessible interfaces.',
      'Optimize application performance for 2G/3G networks.',
      'Mentor junior developers and participate in code reviews.',
    ],
    requirements: [
      '3+ years of experience with React.js, Tailwind CSS, and State Management.',
      'Experience with PWA (Progressive Web Apps) is a huge plus.',
      'Understanding of web accessibility standards (WCAG).',
      'BS/MS in Computer Science or equivalent experience.',
    ],
    benefits: [
      'Remote-first culture.',
      'Stock options (ESOPs).',
      'Learning budget for courses and conferences.',
    ],
    isActive: true,
  },
  {
    id: 3,
    title: 'Field Operations Intern',
    location: 'Pune / Field (Maharashtra)',
    type: 'Internship',
    description:
      'An exciting opportunity for students to understand rural markets. Assist our operations team in logistics planning and supply chain coordination for local produce.',
    responsibilities: [
      'Assist in tracking shipment movements from villages to warehouses.',
      'Verify quality checks documentation.',
      'Coordinate with transport partners for timely pickups.',
      'Data entry and reporting.',
    ],
    requirements: [
      'Pursuing a degree in Operations, Management, or Agriculture.',
      'Basic knowledge of Excel/Google Sheets.',
      'Good communication skills in Marathi and Hindi.',
      'Eager to learn and work in a fast-paced environment.',
    ],
    benefits: [
      'Stipend and internship certificate.',
      'Pre-placement offer (PPO) for top performers.',
      'Field visits and mentorship.',
    ],
    isActive: true,
  },
  {
    id: 4,
    title: 'Product Designer (UX/UI)',
    location: 'Remote',
    type: 'Contract',
    description:
      'Design intuitive mobile-first experiences for the next billion users. Focus on simplicity, clarity, and vernacular language support.',
    responsibilities: [
      'Create user flows, wireframes, and prototypes for mobile apps.',
      'Conduct user research with rural demographics.',
      'Design iconography and visual assets that are culturally relevant.',
      'Work closely with developers to ensure design fidelity.',
    ],
    requirements: [
      'Portfolio showcasing mobile design projects.',
      'Experience designing for non-tech-savvy users is preferred.',
      'Proficiency in Figma, Adobe XD, or Sketch.',
      'Empathy and patience in understanding user needs.',
    ],
    benefits: [
      'Flexible working hours.',
      'Work on a high-impact social cause.',
      'Collaborative design team.',
    ],
    isActive: false,
  },
];

// Helper to get icon based on job title
const getJobIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes('manager') || t.includes('relationship')) return Users;
  if (t.includes('engineer') || t.includes('developer')) return Code;
  if (t.includes('operations') || t.includes('intern')) return ClipboardList;
  if (t.includes('designer') || t.includes('ux')) return Palette;
  if (t.includes('field') || t.includes('logistics')) return Truck;
  return Briefcase;
};

// --- Sub-components ---

const JobCard = ({ job, onViewDetails, onApply }) => {
  const JobIcon = getJobIcon(job.title);

  return (
    <div className="job-card group">
      <div className="card-header">
        <div className="icon-wrapper group-hover:scale-110 transition-transform duration-300">
          <JobIcon size={24} strokeWidth={1.5} />
        </div>
        <span className={`status-badge ${job.isActive ? 'open' : 'closed'}`}>
          {job.isActive ? 'Open' : 'Closed'}
        </span>
      </div>

      <h3>{job.title}</h3>

      <div className="job-tags">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} /> {job.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={14} /> {job.type}
        </span>
      </div>

      <p className="description">{job.description}</p>

      <div className="card-actions">
        <button className="btn-view" onClick={() => onViewDetails(job)}>
          View Details
        </button>
        <button className="btn-apply" onClick={() => onApply(job)} disabled={!job.isActive}>
          {job.isActive ? 'Apply Now' : 'Closed'}
        </button>
      </div>
    </div>
  );
};

const ViewJobModal = ({ job, onClose, onApply }) => {
  if (!job) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-100 flex justify-between items-center rounded-t-3xl">
          <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Overview */}
          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
            <span className="bg-gramin-50 text-gramin-700 px-3 py-1 rounded-full border border-gramin-200 flex items-center gap-2">
              <MapPin size={16} /> {job.location}
            </span>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 flex items-center gap-2">
              <Clock size={16} /> {job.type}
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-gramin-500 pl-3">
              About the Role
            </h3>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-l-4 border-gramin-500 pl-3">
                Responsibilities
              </h3>
              <ul className="space-y-2">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-600 text-sm">
                    <span className="text-gramin-600 mt-1">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-l-4 border-gramin-500 pl-3">
                Requirements
              </h3>
              <ul className="space-y-2">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-600 text-sm">
                    <span className="text-gramin-600 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-gramin-500 pl-3">
              Benefits
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {job.benefits.map((item, idx) => (
                <li key={idx} className="flex gap-2 text-gray-600 text-sm items-center">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200 rounded-b-3xl flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 font-semibold text-gray-600 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(job);
            }}
            disabled={!job.isActive}
            className={`px-8 py-2.5 font-semibold rounded-xl text-white shadow-lg shadow-gramin-500/30 transition-all active:scale-95 ${job.isActive ? 'bg-gramin-600 hover:bg-gramin-700' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            {job.isActive ? 'Apply for this Role' : 'Position Closed'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ApplicationFormModal = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  if (!job) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-2xl" onClick={(e) => e.stopPropagation()}>
        {success ? (
          <div className="p-12 flex flex-col items-center text-center animate-fadeIn">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Thank you for applying for the{' '}
              <span className="font-semibold text-gray-900">{job.title}</span> position. We have
              received your details and will get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Back to Jobs
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-3xl">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Apply Now</h2>
                <p className="text-sm text-gray-500 mt-0.5">Applying for: {job.title}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition">
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gramin-500 focus:ring-2 focus:ring-gramin-200 outline-none transition"
                    placeholder="e.g. Rahul"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gramin-500 focus:ring-2 focus:ring-gramin-200 outline-none transition"
                    placeholder="e.g. Kumar"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gramin-500 focus:ring-2 focus:ring-gramin-200 outline-none transition"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500 font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 rounded-r-xl border border-gray-300 focus:border-gramin-500 focus:ring-2 focus:ring-gramin-200 outline-none transition"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Resume / CV <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-gramin-400 transition cursor-pointer bg-gray-50 hover:bg-white group">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-gramin-500 transition" />
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-gramin-600 hover:text-gramin-500 focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          required
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC up to 5MB</p>
                    {formData.resume && (
                      <p className="text-sm text-green-600 font-medium mt-2">
                        Selected: {formData.resume.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gramin-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-gramin-500/20 hover:bg-gramin-700 transition active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// --- Main Page Component ---

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(null);
  const location = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers-page">
      <PageTitle pathname={location.pathname} />
      <Navbar />

      {/* Hero Section */}
      <section className="careers-hero">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-6 tracking-wide uppercase">
            Start Your Journey <Rocket size={16} />
          </div>
          <h1>
            Build for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gramin-600 to-green-500">
              Bharat
            </span>
          </h1>
          <p>
            Join GraminSetu to bridge the digital divide. We're looking for passionate individuals
            to help empower millions of villagers with technology, transparency, and trust.
          </p>

          <div className="hero-badges">
            <span className="badge">
              <Monitor size={14} /> remote-first options
            </span>
            <span className="badge">
              <Target size={14} /> mission-driven
            </span>
            <span className="badge">
              <TrendingUp size={14} /> competitive pay
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="jobs-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Open Positions</h2>
            <p className="text-gray-500">Find the role that fits you best.</p>
          </div>
          {/* Optional Search/Filter could go here */}
          <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg text-gray-500">
            <Search size={18} />
            <span className="text-sm">Search roles...</span>
          </div>
        </div>

        <div className="jobs-grid">
          {MOCK_JOBS.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onViewDetails={setSelectedJob}
              onApply={() => setIsApplying(job)}
            />
          ))}
        </div>

        {/* Culture / Why Join Section */}
        <div className="mt-24 bg-gramin-50 rounded-3xl p-8 md:p-12 border border-gramin-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Join Us?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">High Impact</h3>
                <p className="text-gray-600 text-sm">
                  Your work directly impacts the livelihoods of farmers and rural entrepreneurs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Growth</h3>
                <p className="text-gray-600 text-sm">
                  Work with cutting-edge tech in a challenging, low-bandwidth environment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Community</h3>
                <p className="text-gray-600 text-sm">
                  Be part of a supportive, diverse team that values empathy and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      {selectedJob && (
        <ViewJobModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onApply={() => setIsApplying(selectedJob)}
        />
      )}

      {isApplying && <ApplicationFormModal job={isApplying} onClose={() => setIsApplying(null)} />}

      <Footer />
      <HelpSupportButton />
    </div>
  );
};

export default Careers;
