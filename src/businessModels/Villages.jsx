import React, { memo } from "react";

const Villages = () => (
  <div className="bg-gramin-50 min-h-screen pb-12">
    <nav className="bg-white py-3 px-4 text-sm sticky top-0 z-10 border-b border-gramin-200">
      <ol className="flex space-x-2 text-gramin-600">
        <li><a href="/">Home</a></li>
        <li>&gt;</li>
        <li><a href="/explore">Explore Business Models</a></li>
        <li>&gt;</li>
        <li className="text-gramin-900 font-semibold">Village</li>
      </ol>
    </nav>
    <section className="max-w-5xl mx-auto px-4 py-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gramin-900 mb-4">Explore Our Village Business Model</h1>
      <p className="text-xl text-gramin-700 mb-6">Empower Your Village Digitally — Connect, Grow, Thrive</p>
      <p className="text-lg text-gramin-600 mb-8">At GraminSetu, we are dedicated to transforming rural communities through technology, fostering economic growth, enhancing governance transparency, and building strong local connections. Our Village Business Model is designed to empower villagers by providing an integrated platform that bridges information gaps, facilitates commerce, and promotes community engagement—all from the convenience of their smartphones.</p>
      <img src="/images/village-hero.jpg" alt="Engaged villagers using GraminSetu" className="mx-auto rounded-lg shadow-md w-full max-w-2xl mb-6" />
    </section>
    <section className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Feature icon="📢" title="Real-Time Village Updates" desc="Stay connected with instant access to official announcements, government schemes, community news, and local events. This keeps every villager informed about opportunities and happenings within their own community." />
      <Feature icon="🎯" title="Simplified Access to Government Benefits" desc="Apply for government welfare programs, subsidies, and support initiatives directly through a user-friendly digital interface. Track your application progress with complete transparency and avoid unnecessary paperwork." />
      <Feature icon="🛒" title="Vibrant Digital Marketplace" desc="Encourage local commerce by enabling villagers to buy, sell, or exchange goods and services within a trusted marketplace built especially for their community. This not only boosts livelihoods but strengthens the local economy." />
      <Feature icon="🤝" title="Dynamic Community Engagement" desc="Participate actively in community forums, discussion groups, and event planning. Messaging features enable seamless communication among villagers, strengthening social bonds." />
      <Feature icon="🛠️" title="Efficient Civic Issue Reporting" desc="Report infrastructure issues, including water supply interruptions, sanitation concerns, and road repairs, with a simple, guided process. Receive prioritized support and quicker response times, especially as a premium user." />
      <Feature icon="🔍" title="Transparent Village Governance" desc="Access detailed village development plans, budgets, project updates, and governance decisions. Engage in village meetings virtually and contribute effectively to your community’s growth with full transparency." />
    </section>
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gramin-900 text-center mb-8">Flexible Pricing Plans to Suit Every Villager</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard name="Basic (Free)" features={["Access to village news, community feed, events calendar, marketplace (standard listings), issue reporting, donation portal, and messaging."]} price="0" quarterly="0" offer="N/A" />
        <PricingCard name="Premium Plus" features={["Includes all Basic features plus featured marketplace listings, priority issue resolution, exclusive event invitations, personalized alerts, and community recognition badges for enhanced credibility."]} price="99" quarterly="270" offer="₹199 for first 3 months" highlight />
        <PricingCard name="Ultimate Access" features={["Comprehensive access with additional benefits including personalized dashboards, job and skill training alerts, VIP event registrations, premium customer support, and advanced marketplace analytics."]} price="149" quarterly="400" offer="₹299 for first 3 months" />
      </div>
    </section>
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gramin-900 mb-4">Why Upgrade to Premium?</h2>
      <ul className="list-disc list-inside text-gramin-700 text-base space-y-2">
        <li>Maximize Marketplace Success: Showcase your products with premium listings highlighted to attract more buyers and increase sales speed.</li>
        <li>Priority Issue Handling: Enjoy expedited support and faster resolution of civic problems reported via the portal.</li>
        <li>Exclusive Access to Development Events: Participate early in government schemes, skill development sessions, and community workshops.</li>
        <li>Social Recognition: Build trust and reputation within your village using premium status badges visible to the community.</li>
        <li>Tailored Notifications: Receive customized alerts for events, government schemes, marketplace activities, and social initiatives that matter most to you.</li>
      </ul>
    </section>
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gramin-900 mb-4">Seamless User Experience</h2>
      <ol className="list-decimal list-inside text-gramin-700 text-base space-y-2">
        <li>Easy Registration: Sign up quickly and select your village to access the portal.</li>
        <li>Accessible on Any Device: Mobile-first design ensures smooth navigation on smartphones, even with limited internet.</li>
        <li>Transparent Subscription Management: Upgrade, renew, or cancel premium plans effortlessly via multiple payment options including UPI, Paytm, and other popular wallets.</li>
        <li>Continuous Support: Get help from local community ambassadors, in-app assistance, and responsive customer support teams.</li>
      </ol>
    </section>
    <section className="max-w-3xl mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold text-gramin-900 mb-4">Be part of the digital transformation shaping the future of rural India.</h2>
      <p className="text-lg text-gramin-700 mb-6">Start with our free offerings or take advantage of premium benefits to unlock the full potential of your village. Together, let's create a thriving, connected, and empowered community.</p>
      <a href="/explore" className="inline-block px-6 py-2 rounded-full bg-gramin-600 text-white font-semibold shadow hover:bg-gramin-700 transition-colors">Back to Explore Business Models</a>
    </section>
  </div>
);

const Feature = ({ icon, title, desc }) => (
  <div className="flex items-start space-x-4 bg-white rounded-lg shadow p-5 border border-gramin-100">
    <span className="text-3xl md:text-4xl">{icon}</span>
    <div>
      <h3 className="font-semibold text-gramin-900 text-lg mb-1">{title}</h3>
      <p className="text-gramin-700 text-base">{desc}</p>
    </div>
  </div>
);

const PricingCard = ({ name, features, price, quarterly, offer, highlight }) => (
  <div className={`rounded-xl shadow-lg border-2 ${highlight ? 'border-gramin-600 bg-gramin-50' : 'border-gramin-200 bg-white'} p-6 flex flex-col items-center`}>
    <h3 className="text-xl font-bold mb-2 text-gramin-900">{name}</h3>
    <ul className="mb-4 text-gramin-700 text-base list-disc list-inside">
      {features.map((f, j) => <li key={j}>{f}</li>)}
    </ul>
    <div className="text-2xl font-bold text-gramin-600 mb-1">₹{price}/month</div>
    <div className="text-sm text-gramin-500 mb-2">Quarterly: ₹{quarterly}</div>
    {offer !== "N/A" && <div className="bg-gramin-200 text-gramin-800 px-3 py-1 rounded-full text-xs font-semibold mb-2">Introductory Offer: {offer}</div>}
    {highlight && <div className="text-xs text-gramin-600 font-semibold mb-2">Most Popular</div>}
    <button className="mt-auto px-6 py-2 rounded-full bg-gramin-600 text-white font-semibold shadow hover:bg-gramin-700 transition-colors">Start Free</button>
  </div>
);

export default memo(Villages);
