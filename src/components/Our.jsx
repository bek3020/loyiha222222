import React from "react";
const Our_card1 = "/assets/img/our1.png";
const Our_card2 = "/assets/img/our2.png";

const Blog_card1 = "/assets/img/our_card2.png";
const Blog_card2 = "/assets/img/our_card3.png";
const Blog_card3 = "/assets/img/our_card4.png";
const Our = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-3 text-gray-900">
            Our services
          </h2>
          <p className="text-gray-500">
            Partners in every phase of the product lifecycle
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 flex justify-between items-start hover:shadow-xl transition duration-300">
              <div>
                <h3 className="text-xl font-bold mb-2">WEB DEVELOPMENT</h3>
                <p className="text-sm text-gray-500 max-w-lg">
                  The visualized product concept is being implemented and
                  executed. We will choose the technology that matches the
                  requirements, and is sustainable to ensure endless development
                  potential.
                </p>
              </div>
              <div className="p-2 ml-4 rounded-full bg-blue-50/70 text-blue-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>

            {/* 2. SEO OPTIMISATION */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">SEO OPTIMISATION</h3>
              <p className="text-sm text-gray-500">
                The work on a digital project continues after deployment. We can
                observe how real users interact with the product and adjust it
                to match their expectations. We will install the latest security
                patches, software updates, and make adjustments to ensure that
                your product remains secure, up to date, and improves over time.
              </p>
            </div>

            {/* 3. PCC, SMM */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">PCC, SMM</h3>
              <p className="text-sm text-gray-500">
                Our Paid Media efforts engage audiences when they are most
                receptive, resulting in high-quality traffic and increased leads
                and revenue. We will help you quickly increase targeted traffic
                from paid advertising channels such as Google, Facebook,
                Instagram and others should be.
              </p>
            </div>
          </div>

          {/* O'ng ustun: Katta xizmat kartochkalari (Product Design, Web Dev) */}
          <div className="lg:w-1/2 space-y-6">
            {/* 1. Product Design */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg">
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <img
                    src={Our_card1}
                    alt="Product Design illustration"
                    className="w-20 h-20 object-cover mr-4 rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Product Design</h3>
                    <p className="text-sm text-gray-500">
                      Product design is where we bring the ideas to life with a
                      functional and attractive digital product that will
                      convert potential users into loyal customers.
                    </p>
                  </div>
                </div>
                {/* Teglar */}
                <div className="mt-4 border-t border-gray-100 pt-4 space-y-3">
                  <p className="text-xs uppercase font-semibold text-gray-500">
                    USER EXPERIENCE DESIGN
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "UX/UI/FLOWS",
                      "WIREFRAMING",
                      "UX WRITING",
                      "PROTOTYPING",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs uppercase font-semibold text-gray-500 mt-4">
                    USER INTERFACE DESIGN
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["DESIGN RESEARCH", "MICRO-INTERACTIONS"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs uppercase font-semibold text-gray-500 mt-4">
                    BRANDING
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["BUILDING-STYLE GUIDE", "UNIQUE ASSETS/ANIMATIONS"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Web Development (O'ng ustundagi kichikroq qismi) */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg">
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <img
                    src={Our_card2}
                    alt="Web Development illustration"
                    className="w-20 h-20 object-cover mr-4 rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Web Development</h3>
                    <p className="text-sm text-gray-500">
                      The goal of front-end development is to create an
                      intuitive and appealing user interface. The "skeleton"
                      created at the wireframing is accurately displayed, with
                      proper adaptations on various devices, and presented
                      exactly as intended.
                    </p>
                  </div>
                </div>

                {/* Teglar */}
                <div className="mt-4 border-t border-gray-100 pt-4 space-y-3">
                  <p className="text-xs uppercase font-semibold text-gray-500">
                    FRONT-END DEVELOPMENT
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML/CSS/JS",
                      "REACT",
                      "NEXT.JS",
                      "WORDPRESS",
                      "PWA",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs uppercase font-semibold text-gray-500 mt-4">
                    BACK-END DEVELOPMENT
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["NODE.JS", "PHP", "API INTEGRATION"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs uppercase font-semibold text-gray-500 mt-4">
                    QUALITY ASSURANCE
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["MANUAL ACCEPTANCE TESTS", "AUTOMATED UNIT TESTS"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            Blog
          </h2>

          {/* Blog Kartochkalari (Gorizontal Slayderga o'xshash) */}
          <div className="flex overflow-x-auto space-x-6 pb-4 cursor-grab">
            {/* 1. Blog Kartochkasi (IKEA) */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <img
                src={Blog_card1}
                alt="IKEA"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-600 rounded">
                  IKEA.com
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2 leading-tight">
                  IKEA.com — the problems with static content
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3">
                  In my previous blog post, I wrote about the history of
                  IKEA.com going from a monolithic e-commerce platform.
                </p>
                <p className="text-xs text-gray-400 mt-3">08.08.23</p>
              </div>
            </div>

            {/* 2. Blog Kartochkasi (AI) */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <img
                src={Blog_card2}
                alt="Artificial Intelligence"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <span className="text-xs font-semibold px-2 py-0.5 bg-green-50 text-green-600 rounded">
                  ARTIFICIAL INTELLIGENCE
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2 leading-tight">
                  IKEA.com — the problems with static content
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3">
                  In my previous blog post, I wrote about the history of
                  IKEA.com going from a monolithic e-commerce platform.
                </p>
                <p className="text-xs text-gray-400 mt-3">08.08.23</p>
              </div>
            </div>

            {/* 3. Blog Kartochkasi (Blue Car / Business) - Rasmda markazda turgani */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden relative">
              <img
                src={Blog_card3}
                alt="Blue Car"
                className="h-48 w-full object-cover"
              />
              {/* Rasm ustidagi 397x328 yozuvi o'rniga, kichik tag qo'shamiz */}
              <div className="absolute top-2 right-2 px-2 py-1 bg-purple-500 text-white text-xs rounded font-bold opacity-0">
                397 x 328
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold px-2 py-0.5 bg-yellow-50 text-yellow-600 rounded">
                  BUSINESS
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2 leading-tight">
                  The problems with static content
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3">
                  In my previous blog post, I wrote about the history of
                  IKEA.com going from a monolithic e-commerce platform.
                </p>
                <p className="text-xs text-gray-400 mt-3">08.08.23</p>
              </div>
            </div>

            {/* Qolgan 2 ta kartochka (qisqartirilgan, vizual effekti uchun) */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden opacity-50">
              <img
                src={Blog_card2}
                alt="AI"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <span className="text-xs font-semibold px-2 py-0.5 bg-green-50 text-green-600 rounded">
                  ARTIFICIAL INTELLIGENCE
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2 leading-tight">
                  IKEA.com — the problems...
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3">...</p>
                <p className="text-xs text-gray-400 mt-3">08.08.23</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden opacity-50">
              <img
                src={Blog_card1}
                alt="IKEA"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-600 rounded">
                  IKEA.com
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2 leading-tight">
                  IKEA.com — the problems...
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3">...</p>
                <p className="text-xs text-gray-400 mt-3">08.08.23</p>
              </div>
            </div>
          </div>

          {/* Navigatsiya nuqtalari va o'qlari */}
          <div className="flex justify-center items-center mt-8 space-x-3">
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <div className="flex space-x-2">
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-800"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Our;
