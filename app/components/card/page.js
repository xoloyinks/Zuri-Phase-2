"use client"
import React, { Suspense, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import {AiFillHeart} from "react-icons/ai"
import Loading from './loading'

const EachCard = ({title, date, poster, id}) =>{
    const color = "text-yellow-500";
    const [favorite, setFavorite] = useState(false);
    // console.log(poster);

    const router = useRouter();

    const showDetails = () => {
        router.push(`/movies/${id}`);
      };
    return(
        <>
            <section  data-testid="movie-card" className='cursor-pointer sm:w-[21%] w-[47%] h-[400px] sm:h-[500px] rounded-lg relative ' >
                <button className='absolute top-0 right-0 h-[40px] w-[40px] rounded-full bg-black/50 text-xl flex items-center justify-center mx-2 my-2' onClick={() => setFavorite(!favorite)}>
                    <AiFillHeart className={`${ favorite ? color : "text-white/75" }`}/>
                </button>
                
                    <Image onClick={showDetails} data-testid="movie-poster" unoptimized={true} width={0} height={0} alt="Image not availble"  placeholder= 'blur' blurDataURL= "/Eclipse-0.3s-250px.svg" src={`https://image.tmdb.org/t/p/original${poster}`} className='w-full h-[70%] rounded-t-xl' 
                       
                    />
                
               
                <div onClick={showDetails} data-testid="movie-title" className='py-2 font-bold '>{title}</div>
                <div onClick={showDetails} data-testid=" movie-release-date" className='text-sm '>{date}</div>
            </section>
        </>
    )
}

export default function Card({movies}) {
  return (
       movies && movies.map((datum, key) => (<EachCard key={key} id={datum.id} poster={datum.poster_path} title={datum.title} date={datum.release_date
        } /> )
    )
  )
}




