import { Suspense } from "react";
import React from 'react'
import Card from '../card/page';

export default async function TopMovies() {
    // console.log("res");
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODU3MWQzY2IyMGYwYTMwYWJkY2Q0M2UyMDJhYTk1MCIsInN1YiI6IjY0ZmUyODE2ZWZlYTdhMDBmZDFhM2I4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-H2h8z08PGBQBcmNw6Aw8f0UK1Ia-66KQSook53Cpxs'
      }
    };
     

    const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1/46298', options);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const movies = await response.json();
  
  
   const data = movies.results;
  //  console.log(data);

  return (
    <>
        <section className='sm:w-[1300px] mx-auto '>
            {/* Category header */}
            <div className='flex items-center justify-between px-3 mx-auto my-8 sm:px-0 '>
                <h1 className='text-xl font-semibold sm:text-3xl'>Top 10 Movies</h1>
                <span className='text-sm cursor-pointer'>See more &gt;</span>
            </div>
            <div className='flex flex-wrap justify-between px-3 sm:px-0'>
              <Suspense fallback="Loading..."><Card movies={data} /></Suspense>
            </div>
        </section>
    </>
  )
}
