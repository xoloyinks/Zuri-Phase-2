import React from 'react'

import {AiFillFacebook} from 'react-icons/ai'
import {BsTwitter,BsYoutube,BsInstagram} from 'react-icons/bs'


export default function Footer() {
  return (
    <>
        <section className='flex flex-col items-center w-full py-5'>
            <div className='flex text-2xl w-[50%] sm:w-[15%] justify-between'>
                <a href="#"><AiFillFacebook /></a>
                <a href="#"><BsInstagram /></a>
                <a href="#"><BsTwitter /></a>
                <a href="#"><BsYoutube /></a>
            </div>
            <div className='flex font-bold  text-[13px]  w-[85%] sm:w-[30%] justify-between sm:text-sm py-8'>
                <a href='#' >Condition of Use</a >
                <a href='#' >Privacey &amp; Policy</a >
                <a href='#' >Press Room</a >
            </div>
            <div className='mb-8 text-sm tracking-wider'>
                &copy; 2021 MovieBox by Adriana Eka Prayudha
            </div>
        </section>
    </>
  )
}
