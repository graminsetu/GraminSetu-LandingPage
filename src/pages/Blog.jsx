import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const Blog = () => (
  <div className="min-h-screen bg-gradient-to-br from-gramin-50 via-white to-setu-50 font-sans flex flex-col">
    <Navbar />
    <main className="flex-1 w-full max-w-3xl mx-auto py-16 px-4 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center mb-10">
        <div className="bg-gradient-to-tr from-gramin-100 via-white to-setu-100 rounded-3xl shadow-lg border border-gramin-200 p-8 md:p-12 flex flex-col items-center w-full">
          <svg
            className="w-16 h-16 text-gramin-600 mb-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 64 64"
          >
            <rect x="8" y="40" width="48" height="12" rx="4" fill="#eafaf1" stroke="#02844a" />
            <rect x="20" y="24" width="24" height="16" rx="4" fill="#f6fcf8" stroke="#02844a" />
            <rect x="28" y="12" width="8" height="12" rx="4" fill="#02844a" stroke="#02844a" />
            <circle cx="32" cy="52" r="4" fill="#02844a" />
          </svg>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gramin-700 drop-shadow-sm text-center">
            GraminSetu Blog
          </h1>
          <p className="text-lg md:text-xl text-gramin-700 text-center mb-4 max-w-2xl">
            We’re excited to share our journey, insights, and rural innovation stories with you
            soon.
            <br />
            <span className="text-gramin-600 font-semibold">
              Our first blog posts are coming soon!
            </span>
          </p>
          <span className="inline-block bg-gramin-50 text-gramin-600 text-base font-semibold px-5 py-2 rounded-full shadow-sm mt-2 animate-pulse">
            Stay tuned and check back regularly!
          </span>
        </div>
      </div>
      {/* No blog cards, just the hero section and main message */}
    </main>
    <Footer />
  </div>
);

export default Blog;
