// src/AnimatedPage.js
import React from 'react';
import { motion } from 'framer-motion';
import Slide from './components/Slide';

const AnimatedPage = () => {
  return (
    <div className='w-full h-full '>
        <section className='flex flex-col w-full items-center justify-center p-8 h-[100vh] bg-cyan-800 text-white font-serif'>
        <Slide>
          <h1 className='text-[5rem]'>HEY WELCOME TO FRAMER MOTION</h1>
        </Slide>
        </section>
        <section className='flex flex-col w-full text-left px-44 h-[100vh] bg-blue-800 justify-center text-white font-serif'>
          <Slide><p className='text-4xl'>Framer motion is easy to use</p></Slide>
          <Slide>
            <p className='text-4xl'>Just follow the documentations and practice and you will find out that it's easy</p>
          </Slide>
        </section>
        <section className='flex flex-col w-full p-8 h-[100vh] justify-center bg-orange-800 text-white font-serif'>
          <Slide>
            <h1 className='text-[3.5rem]'>THANKS FOR READING THIS</h1>
          </Slide>
        
        </section>
    </div>
  );
};

export default AnimatedPage;
