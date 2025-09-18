import React from "react";
import { landingContent } from "../constants/landingContent";
import { useNavigate } from "react-router-dom";

const FeaturesOverview = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-[#f6fcf8] pb-12">
      <header className="py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gramin-700 mb-2">Explore Our Features</h1>
        <p className="text-lg text-gramin-600 max-w-2xl mx-auto">Discover how GraminSetu empowers every portal with digital tools for growth, transparency, and opportunity.</p>
      </header>
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {landingContent.features.items.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gramin-200 flex flex-col p-8 relative hover:shadow-2xl transition-all duration-200">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <div className="font-bold text-xl mb-2">{feature.title}</div>
            <div className="text-gramin-600 mb-6 flex-1">{feature.description}</div>
            <button
              className="absolute bottom-6 right-6 bg-gramin-600 text-white font-bold py-2 px-5 rounded-lg shadow hover:bg-gramin-700 transition"
              onClick={() => navigate(`/features/${feature.id || idx}`)}
            >
              Explore
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default FeaturesOverview;
