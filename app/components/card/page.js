"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import {AiFillHeart} from "react-icons/ai"

import posterx from '../images/927f4f2b19f2ba8ba48181f34494337c.jpg';

const EachCard = ({title, date, poster}) =>{
    const color = "text-yellow-500";
    const [favorite, setFavorite] = useState(false);
    // console.log(poster);
    return(
        <>
            <section data-testid="movie-card" className='cursor-pointer sm:w-[21%] w-[47%] h-[400px] sm:h-[500px] rounded-lg relative '>
                <button className='absolute top-0 right-0 h-[40px] w-[40px] rounded-full bg-black/50 text-xl flex items-center justify-center mx-2 my-2' onClick={() => setFavorite(!favorite)}>
                    <AiFillHeart className={`${ favorite ? color : "text-white/75" }`}/>
                </button>
                <Image data-testid="movie-poster" unoptimized={true} width={0} height={0} alt={title} src={`https://image.tmdb.org/t/p/original${poster}`} className='w-full h-[70%] rounded-lg'/>
               
                <div data-testid="movie-title" className='py-2 font-bold '>{title}</div>
                <div data-testid=" movie-release-date" className='text-sm '>{date}</div>
            </section>
        </>
    )
}

export default function Card({movies}) {
  return (
       movies && movies.map((datum, key) => (<EachCard key={datum.id} poster={datum.poster_path} title={datum.name} date={datum.first_air_date
        } /> )
    )
  )
}




