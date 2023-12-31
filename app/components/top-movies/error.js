'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <h2 className='font-bold'>Something went wrong!</h2>
      <br />
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='px-5 py-2 rounded-xl bg-[#BE123C] text-white'
      >
        Try again
      </button>
    </div>
  )
}