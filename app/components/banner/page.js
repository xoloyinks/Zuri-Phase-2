"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import {FiSearch} from 'react-icons/fi';
import {BsPlayCircleFill} from 'react-icons/bs'


import logo from "../images/tv.png";
import menu from "../images/Menu-alt-4.svg";
import imdb from "../images/5bf071206cd1f384cc337b8867ae5aeb.png";
import ping from "../images/82ace228929a9068f3eb189a3ea549a7.png";



import {Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default async function Banner() {
  const router = useRouter();

  const search = useRef("");
  const mobileSearch = useRef("");

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODU3MWQzY2IyMGYwYTMwYWJkY2Q0M2UyMDJhYTk1MCIsInN1YiI6IjY0ZmUyODE2ZWZlYTdhMDBmZDFhM2I4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-H2h8z08PGBQBcmNw6Aw8f0UK1Ia-66KQSook53Cpxs"
    }
  };
  const endPointBanner = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1/46298`;

  const popularMovies = await fetch(endPointBanner, options);
  const response = await popularMovies.json();
  const data = response.results;
  const slicedPopular = data.slice(0,10);
  // console.log(slicedPopular);

  const handleSearch = (e) => {
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search.current.value}`);
    
  }

  const mobileHandleSearch = (e) => {
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${mobileSearch.current.value}`);
  }

  const showDetails = (id) => {
    router.push(`/movies/${id}`);
  };

  const swiper = <Swiper
      // install Swiper modules
      modules={[ Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className='sm:w-full w-[1440px] h-full'
    >
      {slicedPopular.map((data, i) => (
        <>
            <SwiperSlide key={i} className='relative w-[100vw] sm:w-auto'>
                <Image src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} width={0} height={0} unoptimized={true}  placeholder= 'blur' blurDataURL= "/Rolling-0.6s-50px.svg" alt="Picture of the author" className='absolute w-[100vw] h-[60vh] min-w-[750px] sm:h-auto opacity-95' />
                <div className='absolute z-50 flex items-center h-full px-7 sm:px-20 text-white w-[30%] sm:w-[50%] lg:w-[50%]'>
                    <div className='mt-16'>
                      <div className='sm:text-6xl text-3xl leading[18px]'> {data.title} </div>
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
                      <div className='text-[14px] w-[90%] tracking-wide sm:w-[75%] leading-[18px]'> {data.overview} </div>
                      <div className='mt-5'>
                        <button onClick={() => showDetails(data.id)} className='flex items-center gap-2 px-5 py-2 bg-[#BE123C] rounded-md'><BsPlayCircleFill /> WATCH TRAILER</button>
                      </div>
                    </div>
                </div>
             </SwiperSlide>
        </>
      ))}
    </Swiper>
  return (
    <>
      <section className='sm:h-[600px] w-[100vw] overflow-x-hidden h-[60vh] relative '>
            <nav className='w-[100vw] sm:w-full px-7 sm:px-20 py-[22px] absolute z-50'>
              <div className='flex justify-between '>
                {/* Logo */}
              <div className='flex items-center gap-[10px] sm:gap-[24px]'>
                <div><Image src={logo} width={0} height={0} alt="Picture of the author" className='w-[50px] h-[50px] sm:h-auto sm:w-auto' /></div>
                <div className='text-[17px] font-[700px] text-lg sm:text-md text-white'>MovieBox</div>
              </div>
              {/* Form for search */}
              <form onSubmit={handleSearch} action="" method="" className='items-center justify-between border-2 border-white rounded-lg w-[40%] px-3 h-[fit-content] hidden sm:flex '>
                <input type="search" ref={search} name="search_movie" id="search_movie"  placeholder='What do you want to watch?' className='bg-transparent w-[80%] text-white placeholder:text-white placeholder:text-[12px] text-[13px]  px-2 py-[5px] focus:outline-0' />
                <button disabled = {!search}><FiSearch color='white' /></button>
              </form>
             

              <div className='flex items-center gap-[22px]'>
                <span className='hidden font-semibold text-white sm:block'>Sign in</span>
                <button className='w-[40px] h-[40px] rounded-full bg-[#BE123C] flex items-center justify-center'><Image src={menu} width={0} height={0} alt="Picture of the author"  /></button>
              </div>
              </div>
              <div className='w-full mt-3'>
                <form onSubmit={mobileHandleSearch} action="" method="" className='items-center justify-between border-2 border-white rounded-lg w-full px-3 h-[fit-content] flex sm:hidden mb-8 '>
                  <input type="search" ref={mobileSearch} name="search_movie" id="search_movie" placeholder='What do you want to watch?' className='bg-transparent w-[80%] text-white placeholder:text-white placeholder:text-[12px] text-[13px]  px-2 py-[5px] focus:outline-0' />
                  <button disabled = {!mobileSearch}><FiSearch color='white' /></button>
                </form>
              </div>
            </nav>
            
          {swiper}
      </section>
    </>
  )
}
