import React from 'react'
import { motion } from "motion/react";

const Header = () => {
  return (
    <div id='Header' style={{ backgroundImage: 'url("header_img.png")' }} className='relative min-h-screen flex mb-4 bg-cover bg-center overflow-hidden w-full items-center'>
      <motion.div
        initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className='container text-center mx-auto py-4 px-6 md:20px lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
        <div className='space-x-6 mt-16 flex items-center justify-center'>
          <a className='border border-white px-8 py-3 rounded hover:bg-white hover:bg-opacity-30 block transform transition duration-500 hover:scale-105' href="#Projects">Projects</a>
          <a className='bg-blue-500 px-8 py-3 rounded transform transition duration-500 block hover:scale-105 hover:bg-opacity-70 z-10' href="#Contact">Contact us</a>        </div>
      </motion.div>
    </div>
  )
}

export default Header
