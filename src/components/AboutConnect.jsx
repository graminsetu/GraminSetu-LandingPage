const AboutConnect = () => (
  <section className="w-full flex justify-center items-center mb-12">
    <div className="max-w-xl w-full bg-white/60 backdrop-blur-lg rounded-xl shadow-lg flex flex-col items-center py-8 px-4 border border-gramin-100">
      <h2 className="text-2xl font-bold text-gramin-800 mb-4 text-center border-l-4 border-gramin-600 pl-2">
        Connect
      </h2>
      <div className="flex flex-row gap-6 items-center justify-center">
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gramin-600 hover:bg-gramin-700 text-white font-semibold py-2 px-6 rounded-full transition shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z" />
          </svg>
          LinkedIn
        </a>
        <a
          href="mailto:bhogesh@graminsetu.in"
          className="flex items-center gap-2 bg-white border border-gramin-600 text-gramin-700 hover:bg-gramin-50 font-semibold py-2 px-6 rounded-full transition shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4"
            />
          </svg>
          Email
        </a>
      </div>
    </div>
  </section>
);

export default AboutConnect;
