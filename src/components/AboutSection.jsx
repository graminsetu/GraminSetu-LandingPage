import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About GraminSetu</h2>

        <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
          <p>
            GraminSetu is a digital platform built to support rural communities by improving access
            to information, opportunities, and public services.
          </p>
          <p>
            The platform connects villagers, local businesses, NGOs, and government institutions
            through a single, easy-to-use system designed specifically for village-level needs.
            GraminSetu focuses on simplicity, accessibility, and trust, ensuring technology works
            effectively in rural environments.
          </p>
        </div>

        <button
          onClick={() => navigate('/about')}
          className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          Learn More <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
