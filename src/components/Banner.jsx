import React from 'react'
import Banner_img from "../assets/img/banner_img.png"
import Logo1 from "../assets/img/logo1.png"
import Logo2 from "../assets/img/logo2.png"
import Logo3 from "../assets/img/logo3.png"
import Logo4 from "../assets/img/logo4.png"
import Banner_img1 from "../assets/img/banner.png"
const Banner = () => {
  return (
      <div>
        <section class="max-w-[1745px] w-full mx-auto flex">
         <div class="w-1/2 bg-[#0a0f1a] p-10 flex flex-col justify-center text-white">
                  <div className='flex flex-col'>
                      <div className='flex items-canter gap-[49px] mb-[84px]'>
                      <img className=' w-[136px] h-[134px] top-[227px] left-[86px] rotate-0' src={Banner_img} alt="" />
                          <h1 className=' font-normal text-[60px] leading-[70px] tracking-[0]'>Your Website <br /> good enough?</h1>
                  </div>
                          <button className="flex mb-[172px] items-center justify-between bg-white text-black rounded-lg px-6 py-3 max-w-[280px] w-full">
                         <span className="font-medium text-base">Check this now!</span>
                         <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center ml-4">
                         <i className="fas fa-arrow-right text-white text-sm"></i>
                          </div>
                      </button>
                      <p className='text-amber-50 mb-[16px] font-normal text-[24px] leading-[70px] tracking-[0.16em] align-middle uppercase'>They Trust Us</p>
                      <div className='flex items-center gap-[35px]'>
                          <img src={Logo1} alt="" />
                          <img src={Logo2} alt="" />
                          <img src={Logo3} alt="" />
                          <img src={Logo4} alt="" />
                      </div>
            </div>
       </div>
              <div class="w-1/2  p-10 flex flex-col justify-center gap-3">
                  <img className='w-[1600px] h-[500px]' src={Banner_img1} alt="" />
                  <div className='flex items-center'>
                      <div className='w-[278px] h-[74px] border border-1 border-amber-50 flex flex-col gap-[3px] items-center justify-center'>
                          <i className="fa-solid fa-code text-amber-50"></i>
                          <p className='font-light text-[24px] leading-8 tracking-normal text-amber-50'>Web Development</p>
                      </div>
                      <div className='w-[278px] h-[74px] border border-1 border-amber-50 flex flex-col gap-[3px] items-center justify-center'>
                          <i className="fa-solid fa-seedling text-amber-50"></i>
                          <pSEOptimisation className='font-light text-[24px] leading-8 tracking-normal text-amber-50'></pSEOptimisation>
                      </div>
                      <div className='w-[278px] h-[74px] border border-1 border-amber-50 flex flex-col gap-[3px] items-center justify-center'>
                          <i className="fa-solid fa-phone-volume text-amber-50"></i>
                          <p className='font-light text-[24px] leading-8 tracking-normal text-amber-50'>Web Development</p>
                      </div>
                  </div>
              </div>
        </section>

    </div>
  )
}

export default Banner