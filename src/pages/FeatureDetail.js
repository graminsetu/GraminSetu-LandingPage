import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { landingContent } from '../constants/landingContent';

const FeatureDetail = () => {
  const { featureId } = useParams();
  const navigate = useNavigate();
  const feature =
    landingContent.features.items[featureId] ||
    landingContent.features.items.find((f) => f.id === featureId);

  if (!feature) return <div className="text-center py-20 text-2xl">Feature not found.</div>;

  return (
    <main className="min-h-screen bg-[#f6fcf8] pb-12">
      <nav className="text-sm text-gramin-500 py-4 px-4 max-w-4xl mx-auto">
        <span className="cursor-pointer hover:underline" onClick={() => navigate('/')}>
          Home
        </span>{' '}
        &gt;{' '}
        <span className="cursor-pointer hover:underline" onClick={() => navigate('/features')}>
          Features
        </span>{' '}
        &gt; <span className="text-gramin-700 font-bold">{feature.title}</span>
      </nav>
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-4">
        <div className="flex items-center mb-6">
          <div className="text-5xl mr-6">{feature.icon}</div>
          <h1 className="text-3xl font-extrabold text-gramin-700">{feature.title}</h1>
        </div>
        <div className="text-lg text-gramin-700 mb-6">
          {feature.longDescription || feature.description}
        </div>
        {/* Visuals placeholder */}
        <div className="bg-gramin-50 rounded-xl p-6 mb-6 text-center text-gramin-600">
          [Visuals/Infographics/Charts Placeholder]
        </div>
        {/* Pricing Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {feature.pricing ? (
              feature.pricing.map((plan, idx) => (
                <div key={idx} className="bg-gramin-100 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-gramin-700 mb-2">{plan.label}</div>
                  <div className="text-3xl font-extrabold text-gramin-600 mb-2">{plan.price}</div>
                  <ul className="text-gramin-600 mb-4 list-disc list-inside">
                    {plan.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <button className="bg-gramin-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gramin-700 transition">
                    Subscribe Now
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-gramin-500">Contact us for pricing details.</div>
            )}
          </div>
        </div>
        {/* Testimonials placeholder */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Testimonials</h2>
          <div className="bg-gramin-50 rounded-xl p-6 text-center text-gramin-600">
            [Testimonials Placeholder]
          </div>
        </div>
        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-end">
          <button className="bg-gramin-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gramin-700 transition">
            Request Demo
          </button>
          <button className="bg-white border border-gramin-600 text-gramin-600 font-bold py-2 px-4 rounded-lg hover:bg-gramin-50 transition">
            Contact Support
          </button>
          <button
            className="bg-gray-100 text-gramin-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition"
            onClick={() => navigate('/features')}
          >
            Back to Features
          </button>
        </div>
      </section>
    </main>
  );
};

export default FeatureDetail;
