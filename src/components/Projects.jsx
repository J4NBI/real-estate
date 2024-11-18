import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { projectsData } from '../assets/assets';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'motion/react';

const Projects = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <motion.div
        initial={{opacity: 0, x:-200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}} 
    
      id='Projects' className='container mx-auto py-4 pt-20 px-6 md:px-10 lg:px-32 my-20 w-full overflow-hidden'>
      <h1 className='text-2xl sm:text-4xl  font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
      
     
      {/* project slider container */}
      <div className='overflow-hidden'>
        <Carousel responsive={responsive} className='w-[80%] mx-auto'>
          {projectsData.map((project, index)=>(
            <div key={index} className='realtive w-full'>
              <div className='mx-8'>
                <img className='w-full h-auto mb-14' src={project.image} alt={project.title} />
                <div className='absolute bottom-5 flex md:w-[300px] sm:w-32 justify-center'>
                  <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                    <h2 className='font-semibold text-xl text-gray-800'>{project.title}</h2>
                    <p className='text-gray-500 text-sm'>{project.price} <span className='px-2'>|</span>{project.location}</p>
                  </div>
                </div>
              </div>
            </div>))}
        </Carousel>
      </div>
    </motion.div>
  )
}

export default Projects