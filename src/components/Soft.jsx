import React from "react";
import Dumaloq from "../assets/img/app.asp.png";
const Soft = () => {
  return (
    <div>
      <section className="soft bg-[#FFFFFF] pt-[100px] rounded-t-[40px] pb-[100px] min-h-screen">
        <div className="container max-w-[1700px] mx-auto px-6">
          <div className="flex flex-wrap gap-x-[10px] gap-y-10 justify-center lg:justify-start">
            <div className="w-full max-w-[250px] flex flex-col justify-start">
              <p className="text-[16px] leading-[20px] uppercase text-gray-500 font-bold mb-2">
                OUR ADVANTAGES
              </p>
              <h1 className="font-normal text-[78px] leading-[70px] mb-[30px] mt-1">
                Why
                <br />
                Iron
                <i className="font-normal text-blue-700 not-italic">Soft</i>
              </h1>
              <p className="font-light text-[16px] leading-[24px] text-gray-600 mb-6">
                Team of 12 passionate engineers developing <br /> and setting
                with care to make sure our <br /> clients are 100% happy.
              </p>
              <a
                href="#"
                className="flex items-center text-blue-700 font-medium text-sm transition-colors hover:text-blue-500"
              >
                MORE ABOUT US <span className="ml-2">→</span>
              </a>
            </div>

            <div className="w-[398px] h-[300px] p-6 bg-blue-50 rounded-[2rem] shadow-md flex flex-col justify-between">
              <p className="font-light text-[18px] leading-relaxed text-gray-800 italic mb-4">
                "I’ve worked with them several times and have always been happy
                with the results."
              </p>
              <div className="flex items-end justify-between mt-auto">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden flex items-center justify-center text-xs text-gray-700">
                    <img src={Dumaloq} alt="" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="font-normal text-[16px] leading-[20px]">
                      Olexander Danilkovych
                    </p>
                    <p className="font-light text-[14px] leading-[18px] text-gray-600">
                      co-owner of S-8 trading
                    </p>
                  </div>
                </div>
                <div className="flex items-end self-end justify-center ml-auto">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 border-2 border-blue-300/70 text-gray-500 text-xl mr-2">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 border-2 border-blue-300/70 text-gray-500 text-xl">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[368px] h-[300px] p-6 bg-blue-50 rounded-[2rem] shadow-md flex flex-col justify-between">
              <p className="font-light text-[18px] leading-relaxed text-gray-800 italic mb-4">
                "We were impressed by how promptly they could go from approval
                of the project to delivering final outputs."
              </p>
              <div className="flex items-end justify-between mt-auto">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden flex items-center justify-center text-xs text-gray-700">
                    <img src={Dumaloq} alt="" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="font-normal text-[16px] leading-[20px]">
                      Vitaliy Stetsenko
                    </p>
                    <p className="font-light text-[14px] leading-[18px] text-gray-600">
                      founder of Vital Interiors
                    </p>
                  </div>
                </div>
                <div className="flex items-end self-end justify-center ml-auto">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 border-2 border-blue-300/70 text-gray-500 text-xl mr-2">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 border-2 border-blue-300/70 text-gray-500 text-xl">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[398px] h-[300px] p-6 bg-blue-50 rounded-[2rem] shadow-md flex flex-col justify-between">
              <p className="font-light text-[18px] leading-relaxed text-gray-800 italic mb-4">
                "Their team really listens and researches the best ways to make
                our partnership the best it can possibly be."
              </p>
              <div className="flex items-end justify-between mt-auto">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden flex items-center justify-center text-xs text-gray-700">
                    <img src={Dumaloq} alt="" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="font-normal text-[16px] leading-[20px]">
                      Oleg Bolebrukh
                    </p>
                    <p className="font-light text-[14px] leading-[18px] text-gray-600">
                      founder at Trident Modular
                    </p>
                  </div>
                </div>
                <div className="flex items-end self-end justify-center ml-auto">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 border-2 border-blue-300/70 text-gray-500 text-xl mr-2">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 border-2 border-blue-300/70 text-gray-500 text-xl">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-[10px] pt-[50px] justify-center lg:justify-start">
            <div className="w-[358px] h-[300px] p-8 bg-white rounded-[2rem] shadow-lg flex flex-col justify-start hover:shadow-xl transition duration-300">
              <p className="text-2xl font-bold text-blue-700 mb-2">04.</p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Highly process-oriented
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed overflow-hidden">
                We follow battle-tested, unique processes for everything that we
                do, ensuring high-quality, efficient, and date-free delivery.
              </p>
            </div>

            <div className="w-[358px] h-[300px] p-8 bg-white rounded-[2rem] shadow-lg flex flex-col justify-start hover:shadow-xl transition duration-300">
              <p className="text-2xl font-bold text-blue-700 mb-2">05.</p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Technical excellency
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed overflow-hidden">
                Our engineering practices will bring website and marketing
                craftsmanship, quality, and consistency to the table, all in a
                flexible state to guarantee ever-changing requirements.
              </p>
            </div>
            <div className="w-[358px] h-[300px] p-8 bg-white rounded-[2rem] shadow-lg flex flex-col justify-start hover:shadow-xl transition duration-300">
              <p className="text-2xl font-bold text-blue-700 mb-2">06.</p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Full transparency
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed overflow-hidden">
                We provide transparent and clear communication, project
                management, and budgeting.
              </p>
            </div>

            <div className="w-[358px] h-[300px] p-8 rounded-[2rem] shadow-xl flex flex-col justify-between bg-gradient-to-br from-blue-700 to-cyan-500">
              <h3 className="text-3xl font-bold text-white mb-auto">
                Get a free consultation
              </h3>

              <a
                href="#"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center self-start shadow-md hover:bg-gray-100 transition duration-300 mt-auto"
              >
                <svg
                  className="w-8 h-8 text-blue-600 transform rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Soft;
