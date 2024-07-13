import React from 'react'
import Slide from './Slide'
import blockPoll from "../assets/images/block-poll.png"
import blockTickets from "../assets/images/block-tickets.png"
import blockStats from "../assets/images/block-stats.png"
import { FaArrowLeft, FaArrowRight, FaFigma, FaInstagram, FaLaptop, FaMobile, FaSpotify, FaStarHalf, FaTiktok, FaTwitch, FaTwitter } from 'react-icons/fa'

const Cards = () => {
  return (
    <section className='pt-32 pb-32 sm:px-20 lg:px-6 xl:px-0 '>
    <div className='flex flex-col xl:px-44 px-4  gap-10'>
    <div className='shadow-lg lg:h-[32rem] w-full rounded-xl bg-[#101010] flex  items-center overflow-hidden hover:drop-shadow-xl hover:shadow-purple-700 transition-shadow ease-in duration-300'>
        <div className='flex lg:flex-row flex-col  items-center justify-around w-full '>
            <div className='flex flex-col gap-4 items-center order-2 lg:order-none  justify-center'>
               <p className='text-sm font-bold text-purple-600'>VISUALIZE INFO</p>
               <p className='lg:text-[2.7rem] text-[2rem] leading-tight tracking-tight font-bold'>World class <span className='block'>information design at</span> your fingertips</p>
               <p className='lg:pt-8 text-[#5a5a5a] lg:px-0 lg:pb-0 px-6 pb-6'>Blocks are carefully crafted to help you distill powerful<span className='lg:block'> messages from your information and data - no matter how</span>  complex</p>
            </div>
            <Slide type='spring' delay={0.2}>
            <div className=''>
                <img src={blockPoll} className='lg:w-80 sm:w-96 w-64 lg:mt-0 mt-8' alt=''/>
            </div>
            </Slide>
            
        </div>
    </div>
    <div className='grid grid-flow-cols lg:grid-cols-2 gap-9 border-b pb-44 border-b-[#242442]'>
        <div className='shadow-lg rounded-xl h-[35rem] lg:h-[38rem] scale-100 hover:scale-105 bg-[#101010] flex p-8 justify-center hover:drop-shadow-xl hover:shadow-green-900 transition-all ease-in-out duration-700'>
            <div className='flex flex-col gap-8'>
                <div className='flex h-72 overflow-hidden'>
                    <img src={blockTickets} className='lg:w-60 w-48 relative  object-contain mt-20' alt="" />
                    <img src={blockStats} className='lg:w-72 w-48 relative right-16 object-contain z-10' alt="" />
                </div>
                <div className='flex flex-col gap-4 '>
                    <p className='font-bold text-md text-purple-400'>CUSTOMISE</p>
                    <p className='font-bold tracking-tight leading-tight text-3xl xl:text-[2.2rem]'>Easy to customise. <span className='xl:block'>Hard to get wrong.</span></p>
                    <p className='text-[#676768]'>Blocks are responsive and designed to be <span className='xl:block'>customised easily. No matter how you edit. <span className='xl:block'>they will always look stunning</span></span> </p>
                </div>
            </div>
            
        </div>
        <div className='shadow-lg rounded-xl  h-[38rem] scale-100 hover:scale-105 bg-[#101010] flex p-8 justify-center hover:drop-shadow-xl hover:shadow-blue-900 transition-all ease-in-out duration-700 overflow-hidden'>
            <div className='flex flex-col gap-8 '>
                <div className='grid place-items-center gap-x-24 grid-cols-5 lg:gap-x-10 h-72  relative'>
                    <div className='bg-[#212121] opacity-25 h-20 w-20 rounded-xl'></div>
                    <div className='bg-[#212121] h-20 w-20 rounded-xl flex items-center justify-center shadow-lg'><FaSpotify className='text-4xl text-green-500'/></div>
                    <div className='bg-[#212121] h-20 w-20 rounded-xl flex items-center justify-center shadow-lg'><FaFigma className='text-4xl text-purple-500'/></div>
                    <div className='bg-[#212121] h-20 w-20 rounded-xl flex items-center justify-center shadow-lg'><FaTwitch className='text-4xl text-purple-700'/></div>
                    <div className='bg-[#212121] opacity-25 h-20 w-20 rounded-xl'></div>
                    <div className='bg-[#212121] opacity-25 h-20 w-20 rounded-xl'></div>
                    <div className='bg-[#212121] h-20 w-20 rounded-xl flex items-center justify-center shadow-lg'><FaTwitter className='text-4xl text-blue-500'/></div>
                    <div className='bg-[#212121] h-20 w-20 rounded-xl flex items-center justify-center shadow-lg'><FaTiktok className='text-4xl text-red-500'/></div>
                    <div className='bg-[#212121] h-20 w-20 rounded-xl flex items-center justify-center shadow-lg'><FaInstagram className='text-4xl text-pink-600'/></div>
                    <div className='bg-[#212121] h-20 opacity-25 w-20 rounded-xl'></div>
                    <div className='bg-[#212121] h-20 opacity-25 w-20 rounded-xl'></div>
                    <div className='bg-[#212121] h-20 opacity-25 w-20 rounded-xl'></div>
                    <div className='bg-[#212121] h-20 opacity-25 w-20 rounded-xl'></div>
                    <div className='bg-[#212121] h-20 opacity-25 w-20 rounded-xl'></div>
                    <div className='bg-[#212121] h-20 opacity-25 w-20 rounded-xl'></div>

                </div>
                <div className='absolute h-96 w-12 top-10 left-0 bg-[#101010] shadow-2xl shadow-[#101010] drop-shadow-sm'></div>
                <div className='absolute h-96 w-12 top-10 right-0 bg-[#101010] shadow-2xl shadow-[#101010] drop-shadow-sm'></div>
                <div className='absolute h-12 w-full top-[45%] bg-gradient-to-b from-transparent from-40% to-[#101010] to-70%  lg:top-64  bg-[#101010] shadow-2xl shadow-[#101010] drop-shadow-sm'></div>
                <div className='flex flex-col pl-4 gap-4 '>
                    <p className='font-bold text-md text-purple-400'>EMBED</p>
                    <p className='font-bold tracking-tight leading-tight text-[2.2rem]'>A window <span className='block'>into your work.</span></p>
                    <p className='text-[#676768]'>Simply paste a link to any of the hundreds <span className='block'>of tools you use and Chronicle will</span> <span className='block'>seamlessly package your outputs</span></p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
  )
}

export default Cards
