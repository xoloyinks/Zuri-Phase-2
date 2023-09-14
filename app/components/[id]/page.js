import React from 'react'
import Image from 'next/image';

import {GrHomeRounded} from 'react-icons/gr'
import {ImVideoCamera} from 'react-icons/im'
import {MdOutlineOndemandVideo} from 'react-icons/md'
import {CgCalendarDates} from 'react-icons/cg'
import {BiExit} from 'react-icons/bi'
import {FaPlay} from 'react-icons/fa'
import {AiFillStar,AiOutlineMenuUnfold} from 'react-icons/ai'
import {BiSolidCoupon} from 'react-icons/bi'


import logo from "../images/tv.png";
import trailer from "../images/Rectangle 29.png";
import demo from "../images/Rectangle 37.png"




async function getMovie(movieId){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODU3MWQzY2IyMGYwYTMwYWJkY2Q0M2UyMDJhYTk1MCIsInN1YiI6IjY0ZmUyODE2ZWZlYTdhMDBmZDFhM2I4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-H2h8z08PGBQBcmNw6Aw8f0UK1Ia-66KQSook53Cpxs'
        }
      }

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    
    return await res.json();
} 

export default async function Details({params}) {
    const movieId = params.id;
    const movie = await getMovie(movieId);
    // console.log(movie);
  return (
    <>
        <section className='flex'>
                
            <div className='h-[100vh] border-r-4 border-gray-300 w-[15%] rounded-r-[40px] py-8 hidden sm:flex sm:flex-col justify-between'>
                <div className='flex items-center px-5 gap-[17px] sm:gap-[24px]'>
                    <div><Image src={logo} width={0} height={0} alt="Picture of the author" className='w-[50px] h-[50px] sm:h-auto sm:w-auto' /></div>
                    <div className='text-[24px] font-bold text-lg sm:text-md text-[#BE123C] tracking-wider'>MovieBox</div>
                </div>

                <div className=''>
                    <div className='flex items-center w-full px-5 font-bold text-gray-500 py-7'>
                        <GrHomeRounded /> <span className='px-5'>Home</span>
                    </div>
                    <div className='flex items-center w-full px-5 font-bold text-[#BE123C] py-7 bg-[#BE123C]/25 border-r-4 border-r-[#BE123C]'>
                        <ImVideoCamera /> <span className='px-5'>Movies</span>
                    </div>
                    <div className='flex items-center w-full px-5 font-bold text-gray-500 py-7'>
                        <MdOutlineOndemandVideo /> <span className='px-5'>TV Series</span>
                    </div>
                    <div className='flex items-center w-full px-5 font-bold text-gray-500 py-7'>
                        <CgCalendarDates /> <span className='px-5'>Upcoming</span>
                    </div>
                </div>

                <div className='rounded-2xl border-2 border-{#BE123C} w-[80%] mx-auto p-5 bg-gray-300/25'>
                    <span className='text-[12px] font-bold'>Play movie quizes and earn free tickets</span><br />
                    <span className='text-[10px] leading-3'>50% people are playing now</span>
                    <br /><br />
                    <button className='text-[10px] p-2 rounded-full bg-gray-600/25 flex mx-auto font-bold text-[#BE123C]'>Start playing</button>
                </div>
                <button className='flex items-center mx-auto mb-4 font-bold'>
                   <BiExit className='text-xl'/> <span className='px-4'>Log out</span>
                </button>
            </div>
            <div className='w-full'>
            <div className='flex items-center px-3 gap-[17px] sm:gap-[24px] sm:hidden py-3 mt-3'>
                    <div><Image src={logo} width={0} height={0} alt="Picture of the author" className='w-[50px] h-[50px] sm:h-auto sm:w-auto' /></div>
                    <div className='text-[24px] font-bold text-lg sm:text-md text-[#BE123C] tracking-wider'>MovieBox</div>
                </div>
                <div className='relative h-[28vh] sm:h-[60%] w-[95%] mx-auto'>
                    <Image unoptimized={true} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={0} height={0} alt='trailer' className='w-[100%] h-[25vh] sm:h-[55vh] absolute mt-4 rounded-2xl' />
                    <div className='absolute w-full h-[27vh] sm:h-[55vh] flex flex-col items-center justify-center'>
                        <button className='z-50 flex justify-center items-center text-xl sm:text-3xl text-white bg-white/50 rounded-full h-[70px] w-[70px] sm:h-[85px] sm:w-[85px]'>
                            <FaPlay />
                        </button>
                        <div className='text-lg font-semibold tracking-wider text-white'>
                            Watch Trailer
                        </div>
                    </div>
                </div>
                <div className='px-5 '>
                    <div className='justify-between tracking-wider sm:flex'>
                        <div className='sm:flex'>
                            <span data-testid ="movie-title" className='text-sm font-semibold sm:text-xl'>{ movie.original_title || movie.belongs_to_collection.name}      
                                <span data-testid ="movie-release-date" >
                                    &bull;
                                    {movie.release_date}
                                    &bull;
                                </span>
                                <span data-testid ="movie-runtime" >
                                    PG-13 &bull;
                                    {movie.runtime} 
                                </span>
                            </span>
                            
                            <span className='flex py-3 sm:px-5 w-fit sm:py-0'>
                                {movie.genres.map((genre, key) => <span key={key} className=' border-2 border-gray-200 rounded-lg text-[11px] px-3 flex items-center mr-3'>{genre.name}</span>)}
                            </span>
                        </div>
                        <div className='flex text-md'>
                            <AiFillStar className='mr-2 text-2xl text-yellow-500'/>
                            <span className='opacity-40'>8.5 |</span>
                            <span>| 350K</span>
                        </div>
                    </div>
                    <div className='py-5 tracking-wider sm:flex '>

                        <div className='w-full sm:w-9/12 '>
                           <span data-testid ="movie-overview"  className='text-[15px]'>
                           {movie.overview}
                           </span>
                        
                            <div className='flex flex-col h-[12vh] my-5 justify-between text-[14px]'>
                                <div><b>Director</b> : Joseph Kosinski</div>
                                <div><b>Writers</b> :  Jim Cash, Jack Epps Jr,  Peter Craigi</div>
                                <div><b>Stars</b>: Tom Cruise, Jennifer Connelly, Miles Teller</div>
                            </div>
                            <div className='sm:flex'>
                                <button className='flex text-white items-center sm:gap-2 px-5 py-2 bg-[#BE123C] rounded-md w-full sm:w-[40%] justify-center'>Top rated movie #65</button>
                                <select name="" id="" className='border-2 border-gray-200 rounded-lg w-full py-3 sm:py-0 sm:w-[60%] sm:border-l-0'>
                                    <option value="award">Award 9 nominations</option>
                                </select>
                            </div>
                       </div>

                       <div className='w-full mt-5 sm:mt-0 sm:w-5/12'>
                            
                            <button className='flex text-white items-center gap-2 px-5 text-sm py-2 bg-[#BE123C] rounded-md w-full sm:w-[60%] sm:ml-auto justify-center'><BiSolidCoupon /> See Showtimes</button>
                            
                            <button className='flex border-2 text-sm  border-[#BE123C] items-center gap-2 px-5 py-2 bg-gray-200 text-[#BE123C] rounded-md w-full sm:w-[60%] sm:ml-auto justify-center mt-2'><AiOutlineMenuUnfold />More watch options</button>

                            <div className='mt-2'>
                                <Image src={demo} width={0} height={0} alt='Zuri demo' className='sm:w-[60%] w-[80%] mx-auto sm:ml-auto'/>
                            </div>

                       </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
