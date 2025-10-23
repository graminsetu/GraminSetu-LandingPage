import React from 'react';
import graminsetuMainImage from '../../assets/images/graminsetuMainImage.png';
import neuronetwork from '../../assets/images/neuronetwork.png';
import VillagersportalIcon from '../../assets/images/VillagersportalIcon.webp';
import BusinessportalIcon from '../../assets/images/BusinessportalIcon.webp';
import GovernamentportalIcon from '../../assets/images/GovernamentportalIcon.webp';

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-[#EEF5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 min-h-[72vh] py-12">
          {/* Left content */}
          <div className="lg:col-span-7 z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#256B3E] leading-tight">
                Uniting Villages. Inspiring Progress.
                <br />
                Digital Innovation for Every Community.
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-800">
                GraminSetu bridges the digital divide in rural India bringing community news,
                transparent governance, and local market access right to your doorstep, even offline
                and in your own language.
              </p>

              {/* What You Can Do with GraminSetu */}
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#256B3E] font-bold text-lg">•</span>
                  <p className="text-gray-800 text-base sm:text-lg">
                    <strong>Community News & Events:</strong> Stay informed with real stories,
                    updates, and opportunities from your village.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#256B3E] font-bold text-lg">•</span>
                  <p className="text-gray-800 text-base sm:text-lg">
                    <strong>Transparent Government Services:</strong> Report local issues, track
                    welfare schemes, and get real-time updates with ease.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#256B3E] font-bold text-lg">•</span>
                  <p className="text-gray-800 text-base sm:text-lg">
                    <strong>Village Marketplace:</strong> Buy, sell, and grow at fair prices, with
                    secure digital payments and verified listings.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-[#256B3E] text-white px-10 py-3 rounded-full shadow-md hover:bg-[#1E5630] transition">
                  Start Exploring Portals
                </button>
                <button className="bg-[#F57C00] text-white px-10 py-3 rounded-full shadow-md hover:bg-[#E66A00] transition">
                  Join the GraminSetu Movement
                </button>
              </div>

              {/* Trust Statement */}
              <p className="mt-6 text-sm text-gray-700 italic">
                Trusted by village leaders, NGOs, and government agencies, GraminSetu is built for
                India’s rural realities optimized for low bandwidth, multilingual access, and
                offline use so everyone can stay connected.
              </p>

              {/* Accessibility Matters */}
              <p className="mt-4 text-sm text-gray-600">
                <strong>Accessibility Matters:</strong> Women, youth, and marginalized groups are at
                the heart of our mission. Everyone deserves a voice and a connection.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5 flex justify-end items-center relative overflow-visible">
            {/* Background neural network */}
            <div
              className="absolute top-[-260px] right-0 w-[120%] h-[120%] rounded-xl"
              style={{
                backgroundImage: `url(${neuronetwork})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top right',
                zIndex: 0,
              }}
            ></div>

            {/* Foreground main image */}
            <img
              src={graminsetuMainImage}
              alt="GraminSetu Main"
              className="relative w-full max-w-[2000px] lg:max-w-[2200px] object-contain rounded-xl transform scale-125"
              style={{ maxHeight: '95vh', marginTop: '-120px', zIndex: 1 }}
            />
          </div>

          {/* Portal Icons Box beside content and below image */}
          <div
            className="lg:col-span-10 flex justify-end items-start mt-[-210px]"
            style={{ position: 'relative', left: '270px' }}
          >
            <div className="rounded-xl shadow-lg px-8 py-3 border-2 border-[#07670A] bg-transparent w-[580px] flex items-center">
              <div className="w-full flex justify-center gap-12">
                <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
                  <a href="/village-business-model" className="block">
                    <div className="bg-[#07670A]/10 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 flex justify-center items-center rounded-full border-2 border-[#07670A] hover:scale-105 transition-transform">
                      <img
                        src={VillagersportalIcon}
                        alt="Villages"
                        className="h-10 sm:h-12 lg:h-16"
                      />
                    </div>
                  </a>
                  <span className="mt-2 text-[#07670A] font-medium text-xs sm:text-base lg:text-lg">
                    Villages
                  </span>
                </div>
                <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
                  <a href="/government-csr-business-model" className="block">
                    <div className="bg-[#07670A]/10 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 flex justify-center items-center rounded-full border-2 border-[#07670A] hover:scale-105 transition-transform">
                      <img
                        src={GovernamentportalIcon}
                        alt="Government"
                        className="h-10 sm:h-12 lg:h-16"
                      />
                    </div>
                  </a>
                  <span className="mt-2 text-[#07670A] font-medium text-xs sm:text-base lg:text-lg">
                    Government
                  </span>
                </div>
                <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
                  <a href="/business/ngo-business-model" className="block">
                    <div className="bg-[#07670A]/10 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 flex justify-center items-center rounded-full border-2 border-[#07670A] hover:scale-105 transition-transform">
                      <img
                        src={BusinessportalIcon}
                        alt="Businesses"
                        className="h-10 sm:h-12 lg:h-16"
                      />
                    </div>
                  </a>
                  <span className="mt-2 text-[#07670A] font-medium text-xs sm:text-base lg:text-lg">
                    Businesses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
