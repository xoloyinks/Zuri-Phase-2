import Banner from '@/app/components/banner/page'
import Card from '@/app/components/card/page';
import Footer from '@/app/components/footer/page';
import React from 'react'
import { Suspense } from 'react';

export default async function Search({params}) {
    const searchedTerm = params.search;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODU3MWQzY2IyMGYwYTMwYWJkY2Q0M2UyMDJhYTk1MCIsInN1YiI6IjY0ZmUyODE2ZWZlYTdhMDBmZDFhM2I4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-H2h8z08PGBQBcmNw6Aw8f0UK1Ia-66KQSook53Cpxs'
        }
      };
    const fetchSearch = await fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&query=${searchedTerm}`, options);
    
    const data = await fetchSearch.json();
    const results = data.results;

    // console.log(results);
  return (
    <>
        <section>
            <Banner />
            <div>
                <h1 className='py-8 text-2xl font-bold text-center'> { results.length} search results for &apos;{searchedTerm}&apos;:</h1>
            </div>
            <div >
              <Suspense fallback="Loading..."></Suspense>
            </div>
            <div className='flex flex-wrap justify-between px-3 sm:px-20'>
                {results.length === 0 ? <div className='w-full mb-10 text-2xl font-bold text-center'>Oops! Movie not available.</div> : <Card movies={results} />}
            </div>
            <Footer />
        </section>
    </>

  )
}
