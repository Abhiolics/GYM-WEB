import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg from "../../assets/dumbell.png"
import { motion } from 'framer-motion'
import { SlideRight } from '../../utility/animation'
import { SlideLeft } from '../../utility/animation'

const Hero = () => {
  return (
   <>
   <section>
    <div className='container grid grid-cols-1
    md:grid-cols-2 min-h-[650px] relative'>

        {/* {Brand info} */}
        <div className='flex flex-col justify-center
        py-14 md:py-0  font-playfair'>
           <div className='text-center md:text-left space-y-6'>
           <motion.h1 
           variants={SlideRight(0.6)}
           initial="hidden"
           animate="visible"
           className='text-5xl uppercase font-[Lexend] lg:text-6xl font-bold leading-relaxed xl:leading-normal '>
               Pain is temporary, pride is  <span className='text-primary'> forever</span>
                {""}
            </motion.h1>
            <motion.p 
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className='text-gray-600 xl:max-w-[500px]'>
Unlock your true potential at Muscles Matrix. Embrace the grind, surpass your goals, and become part of a fitness family that champions your success every step of the way.
            </motion.p>

            {/* Button Section */}
            <motion.div 
            variants={SlideRight(1.5)}
            initial="hidden"
            animate="visible"
            className='flex justify-center gap-8 md:justify-start !mt-8'>
                <button className='primary-btn flex items-center gap-2 '>
                    {""}
                     Order Now
                     </button>
                     <button className='flex  justify-center gap-2  items-center'>
                    <FaPlay/>    Watch Now
                     </button>
            </motion.div>
           </div>
        </div>

        {/* Image Section */}
        <div className='flex justify-center items-center'>
            <motion.img
             variants={SlideLeft(1.5)}
             initial="hidden"
             animate="visible"
           
            src={HeroImg} alt=""
            className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow'
            />
            
        </div>
    </div>
   </section>
   </>
  )
}

export default Hero
