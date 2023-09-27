import { Suspense } from "react";
import React from 'react'
import Card from '../card/page';

export default async function TopMovies() {
    // console.log("res");
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.AUTH_KEY
      }
    };
     

    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1/46298', options);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const movies = await response.json();
  
  
    const data = movies.results;
    // const slicedData = data.slice(0,10);
    // console.log(data);

  return (
    <>
        <section className='sm:w-[1300px] mx-auto '>
            {/* Category header */}
            <div className='flex items-center justify-between px-3 mx-auto my-8 sm:px-0 '>
                <h1 className='text-xl font-semibold sm:text-3xl'>Popular Movies</h1>
                <span className='text-sm cursor-pointer'>See more &gt;</span>
            </div>
            <div className='flex flex-wrap justify-between px-3 sm:justify-evenly sm:px-0' >
              <Suspense fallback="Loading..."><Card movies={data} /></Suspense>
            </div>
        </section>
    </>
  )
}
