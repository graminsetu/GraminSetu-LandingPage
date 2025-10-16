import React from 'react';
import graminsetuMainImage from '../../assets/images/graminsetuMainImage.png';
import VillagersportalIcon from '../../assets/images/VillagersportalIcon.webp';
import BusinessportalIcon from '../../assets/images/BusinessportalIcon.webp';
import GovernamentportalIcon from '../../assets/images/GovernamentportalIcon.webp';
import neuronetwork from '../../assets/images/neuronetwork.png';

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-[#EEF5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 min-h-[72vh] py-12">
          {/* Left content */}
          <div className="lg:col-span-7 z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#256B3E] leading-tight">
                Bridging the Gap
                <br />
                Building the Future.
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-800">
                Our platform for village governance, government services, and business development
                to strengthen rural communities.
              </p>

              <p className="mt-4 text-base sm:text-lg text-gray-700 italic">
                Our platform provides specialized portals for village governance, government
                services, and business development to strengthen rural communities.
              </p>

              {/* Icons */}
              <div className="mt-8 flex flex-wrap items-center gap-8 sm:gap-12">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#07670A]/10 h-20 w-20 sm:h-24 sm:w-24 flex justify-center items-center rounded-full border-2 border-[#07670A]">
                    <img src={VillagersportalIcon} alt="Villages" className="h-10 sm:h-12" />
                  </div>
                  <span className="mt-3 text-[#07670A] font-medium text-base sm:text-lg">
                    Villages
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#07670A]/10 h-20 w-20 sm:h-24 sm:w-24 flex justify-center items-center rounded-full border-2 border-[#07670A]">
                    <img src={GovernamentportalIcon} alt="Government" className="h-10 sm:h-12" />
                  </div>
                  <span className="mt-3 text-[#07670A] font-medium text-base sm:text-lg">
                    Government
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#07670A]/10 h-20 w-20 sm:h-24 sm:w-24 flex justify-center items-center rounded-full border-2 border-[#07670A]">
                    <img src={BusinessportalIcon} alt="Businesses" className="h-10 sm:h-12" />
                  </div>
                  <span className="mt-3 text-[#07670A] font-medium text-base sm:text-lg">
                    Businesses
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-[#256B3E] text-white px-10 py-3 rounded-full shadow-md hover:bg-[#1E5630] transition">
                  Explore Portals
                </button>
                <button className="bg-[#F57C00] text-white px-10 py-3 rounded-full shadow-md hover:bg-[#E66A00] transition">
                  Join Our Team
                </button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5 flex justify-end items-center relative overflow-visible">
            {/* Background neural network */}
            <div
              className="absolute inset- rounded-xl"
              style={{
                backgroundImage: `url(${neuronetwork})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.25,
                zIndex: 0,
              }}
            ></div>

            {/* Foreground main image */}
            <img
              src={graminsetuMainImage}
              alt="GraminSetu Main"
              className="relative w-full max-w-[1400px] lg:max-w-[1600px] object-contain rounded-xl transform scale-125"
              style={{ maxHeight: '95vh', zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
