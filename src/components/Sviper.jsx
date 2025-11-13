import React from "react";
// Berilgan rasm yo'llari faqat ramziy, ularni to'g'ri rasm manbalariga almashtirish kerak
import Card1 from "../assets/img/card1.jpg";
import Card2 from "../assets/img/card2.png"; // Modern look... (Software)

const Sviper = () => {
  // Rasmdagi ranglar va dizaynga maksimal darajada o'xshatishga harakat qilindi
  return (
    <div className="bg-gray-900 min-h-screen py-20 text-white font-sans">
      <section className="container mx-auto px-4">
        {/* 1. Sarlavha qismi */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            OUR PROJECTS
          </p>
          <h1 className="text-6xl font-bold mb-4">Case studies</h1>
          <p className="text-base max-w-3xl mx-auto text-gray-300">
            When it comes to creating a high quality website and adjusting the
            marketing strategy, experience matters a lot. Explore our portfolio
            to view some of the projects we've successfully completed!
          </p>
        </div>

        {/* 2. Kartochkalar (Slayder) qismi */}
        <div className="flex justify-center items-stretch overflow-x-hidden relative space-x-6">
          {/* Chapdagi chekka kartochka (Masalan, Modular) */}
          <div className="flex-shrink-0 w-80 opacity-50 transform scale-90 -translate-x-12">
            <div className="h-full bg-blue-900/50 rounded-lg overflow-hidden shadow-2xl relative">
              <img
                src={Card1}
                alt="Assemble Modular"
                className="w-full h-96 object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="p-6 absolute bottom-0">
                <h3 className="text-2xl font-semibold mb-2">
                  Assemble modular
                </h3>
                <p className="text-gray-400">
                  Website for an assemble modular houses enterprise
                </p>
              </div>
            </div>
          </div>

          {/* 2.1. O'rta chap kartochka (Software Development) - Asosiy ko'rinish */}
          <div className="flex-shrink-0 w-[420px] bg-[#1a1a2e] rounded-xl overflow-hidden shadow-2xl z-10">
            <div className="relative">
              {/* Rasm va qizil sochli yigit */}
              <img
                src={Card2}
                alt="Software Development"
                className="w-full h-[400px] object-cover"
              />
              {/* Ekran tasviri ustidagi joy */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
            </div>
            <div className="p-6">
              <div className="flex space-x-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-gray-700 rounded text-gray-300">
                  WORDPRESS
                </span>
                <span className="text-xs font-semibold px-3 py-1 bg-gray-700 rounded text-gray-300">
                  PWA
                </span>
              </div>
              <h3 className="text-xl font-semibold mt-4">
                Modern look for the the software development company
              </h3>
            </div>
          </div>

          {/* 2.2. O'rta o'ng kartochka (Assemble Modular Houses) - Asosiy ko'rinish */}
          <div className="flex-shrink-0 w-[420px] bg-[#1a1a2e] rounded-xl overflow-hidden shadow-2xl z-10">
            <div className="relative">
              {/* Rasm (ofis interyeri) */}
              <img
                src={Card1}
                alt="Assemble Modular Houses"
                className="w-full h-[400px] object-cover"
              />
              {/* Ekran tasviri ustidagi joy */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
              <div className="absolute top-10 left-10 p-4 border border-white rounded-lg backdrop-blur-sm bg-black/20">
                <p className="text-2xl font-light">
                  Reliable Partner for all fit out projects
                </p>
                <p className="text-sm mt-2 text-gray-300">
                  Full range of interior fit-out projects. From design to
                  finish.
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex space-x-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 bg-gray-700 rounded text-gray-300">
                  BUILDING-STYLE GUIDE
                </span>
                <span className="text-xs font-semibold px-3 py-1 bg-gray-700 rounded text-gray-300">
                  REACT
                </span>
              </div>
              <h3 className="text-xl font-semibold mt-4">
                Corporate website for an assemble modular houses enterprise
              </h3>
            </div>
          </div>

          {/* O'ngdagi chekka kartochka (Fitness/Yoga) */}
          <div className="flex-shrink-0 w-80 opacity-50 transform scale-90 translate-x-12">
            <div className="h-full bg-orange-700/50 rounded-lg overflow-hidden shadow-2xl relative">
              <img
                src={Card1}
                alt="Fitness/Yoga"
                className="w-full h-96 object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="p-6 absolute bottom-0">
                <h3 className="text-2xl font-semibold mb-2">
                  Fitness enterprise
                </h3>
                <p className="text-gray-400">
                  Corporate website for a fitness and yoga studio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Navigatsiya va tugma qismi */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          {/* O'qlar */}
          <div className="flex space-x-4">
            <button className="p-3 rounded-full border border-gray-700 hover:border-blue-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 hover:text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <button className="p-3 rounded-full border border-gray-700 hover:border-blue-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 hover:text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Nuqtalar (Pagination) */}
          <div className="flex space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="w-2 h-2 rounded-full bg-gray-700"></span>
            <span className="w-2 h-2 rounded-full bg-gray-700"></span>
          </div>

          {/* "See more" tugmasi */}
          <a
            href="#"
            className="ml-12 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            See more
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sviper;
