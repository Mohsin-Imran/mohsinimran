import React from 'react';

const CardHeroSection: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Optional subtle bottom wave */}
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-[#FDC700] uppercase tracking-wider text-3xl md:text-4xl lg:text-4xl font-bold mb-6">
          Let's Build
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-8">
          Have a live SaaS product that's slowing you down?
          <br />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            I help founders regain velocity by owning the tech end-to-end.
            </p>
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://calendly.com/mohsin-imran/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FDC700] hover:bg-[#e5b307] text-white text-gray-900 font-semibold text-lg py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Book a Product Call
          </a>

          <a
            href="mailto:mnmemon549@email.com"
            className="border border-gray-500 text-white font-semibold text-lg py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default CardHeroSection;