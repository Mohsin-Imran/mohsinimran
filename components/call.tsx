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

        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-6">
          Need a technical consultant for a SaaS product, MVP, or SEO audit?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          I help founders improve backend architecture, API integration, page speed, mobile-responsive design, secure payments, cloud hosting, and zero-downtime deployment.
        </p>

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
            href="mailto:mnmemon549@email.com?subject=Free%20Website%20Audit%20Request"
            className="border border-gray-500 text-black font-semibold text-lg py-4 px-10 rounded-full bg-white hover:text-gray-900 transition-all duration-300"
          >
            Get a Free Website Audit
          </a>
        </div>
      </div>
    </section>
  );
};

export default CardHeroSection;
