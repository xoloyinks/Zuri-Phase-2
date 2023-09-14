"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react';
import {FiSearch} from 'react-icons/fi';
import {BsPlayCircleFill} from 'react-icons/bs'

import poster from "../images/Poster.png";
import logo from "../images/tv.png";
import menu from "../images/Menu-alt-4.svg";
import imdb from "../images/5bf071206cd1f384cc337b8867ae5aeb.png";
import ping from "../images/82ace228929a9068f3eb189a3ea549a7.png";



import {Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Banner() {
  const swiper = <Swiper
      // install Swiper modules
      modules={[ Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='sm:w-full w-[1440px] h-full'
    >
      <SwiperSlide className='relative w-[100vw] sm:w-auto'>
         <Image src={poster} width={0} height={0} alt="Picture of the author" className='absolute w-[100vw] h-[70vh] min-w-[750px] sm:h-auto' />
         <div className='absolute z-50 flex items-center h-full px-7 sm:px-20 text-white w-[30%] sm:w-[40%]'>
            <div>
            <div className='text-5xl leading[18px]'>John Wick 3 : Parabellum</div>
            <div className='flex items-center my-5 w-[60%] justify-between'>
              <div className='flex gap-3 '>
              <span><Image src={imdb} width={0} height={0} alt="Picture of the author" className='w-[35px] h-[17px]' /></span>
              <span className='text-[12px] text-gray-300'> 86.0 / 100</span>
              </div>
              <div className='flex gap-3'>
                <span><Image src={ping} width={0} height={0} alt="Picture of the author" className='w-[15px] h-[17px]' /></span>
                <span className='text-[12px] text-gray-300'> 97%</span>
              </div>
            </div>
            <div className='text-[14px] w-[60%] tracking-wide sm:w-[75%] leading-[18px]'>John Wick is on the run after killing a member of the international assassins&lsquo; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</div>
            <div className='mt-5'>
              <button className='flex items-center gap-2 px-5 py-2 bg-[#BE123C] rounded-md'><BsPlayCircleFill /> WATCH TRAILER</button>
            </div>
            </div>
            
         </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  return (
    <>
      <section className='sm:h-[600px] w-[100vw] overflow-x-hidden h-[70vh] relative '>
            <nav className='flex justify-between w-[100vw] sm:w-full px-7 sm:px-20 py-[22px] absolute z-50'>
              {/* Logo */}
              <div className='flex items-center gap-[17px] sm:gap-[24px]'>
                <div><Image src={logo} width={0} height={0} alt="Picture of the author" className='w-[50px] h-[50px] sm:h-auto sm:w-auto' /></div>
                <div className='text-[24px] font-[700px] text-lg sm:text-md text-white'>MovieBox</div>
              </div>
              {/* Form for search */}
              <form action="" method="" className='items-center justify-between border-2 border-white rounded-lg w-[40%] px-3 h-[fit-content] hidden sm:flex'>
                <input type="search" name="search_movie" id="search_movie" placeholder='What do you want to watch?' className='bg-transparent w-[70%] text-white placeholder:text-white placeholder:text-[12px] text-[13px]  px-2 py-[5px] focus:outline-0' />
                <button><FiSearch color='white' /></button>
              </form>
              <div className='flex items-center gap-[22px]'>
                <span className='hidden font-semibold text-white sm:block'>Sign in</span>
                <button className='w-[40px] h-[40px] rounded-full bg-[#BE123C] flex items-center justify-center'><Image src={menu} width={0} height={0} alt="Picture of the author"  /></button>
              </div>
            </nav>
          {swiper}
      </section>
    </>
  )
}
