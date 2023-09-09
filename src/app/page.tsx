'use client'

import HorizontalCollection from '@/components/HorizontalCollection'
import Image from 'next/image'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import { roomTypes } from './data/exports'
import Marquee from '@/components/ui/Marquee'


export default function Home() {
  return (
    <main className="bg-tallow-100">
      {/* Hero section */}

      <section className="flex min-h-screen justify-center items-center relative">
        <span className="absolute -top-6 text-tallow-300 drop-shadow-xl opacity-40 font-extrabold  text-[5rem] md:text-[14rem] order-last tracking-tighter">
          sydmouth
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl z-10">
          <div className="px-6 sm:px-8 py-4 -mt-44 md:mt-64 space-y-4">
            <span className="uppercase tracking-widest text-tallow-400 font-light">
              Yaiphaba Naorem
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
              Furniture & Interior design
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 leading-snug">
              Over the past 5 years, as an furniture art director and designer,
              I’ve worked with big and creative clients to successfully help
              them build their perfect furnitures and unique interior spaces.
            </p>

            <a
              href="#!"
              className="mt-10 relative inline-flex items-center px-12 py-3 overflow-hidden font-medium text-neutral-50 bg-tallow-600 rounded-full group"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-tallow-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <HiArrowRight className="w-5 h-5" />
              </span>
              <span className="relative">Look into designs</span>
            </a>
          </div>
          <div className="order-first md:order-last">
            <Image
              className="object-cover h-[70vh] sm:h-full sm:w-full"
              src="/images/sydmouth-sample-bg01.png"
              // src='/images/3d-model-2.png'
              height={1000}
              width={800}
              priority
              alt="Symouth backdrop image"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="bg-tallow-300 mix-blend-darken h-[70vh] flex justify-center items-center py-16 px-6 my-6">
        <div>
          <h2 className="text-4xl lg:text-8xl md:max-w-lg lg:max-w-5xl md:text-center text-tallow-950 font-light md:font-normal [text-wrap:balance]">
            &quot;There is something about the warmth of{' '}
            <span className="text-tallow-700 font-semibold inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.8xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
                <li>wood 🪵</li>
                <li>love ❤️</li>
                <li>home 🏠</li>
                <li aria-hidden="true">wood</li>
              </ul>
            </span>
            .&quot;
          </h2>
        </div>
      </section>

      {/* Collections display */}
      <section>
        <div className="max-w-7xl mx-auto my-6 md:my-32 px-6 md:px-8 mb-10 relative">
          {/* <div className='absolute hidden md:block top-[55%] right-0 mr-12 z-10 bg-tallow-300/30 backdrop-blur-md border border-tallow-400/30 p-4 hover:bg-tallow-300/50 duration-300 text-tallow-50'>
            <HiArrowRight />
          </div> */}
          <div className="py-4 space-y-2 text-left">
            <span className="uppercase tracking-widest text-tallow-500 font-light">
              Curated Products
            </span>
            <h2 className="text-6xl md:text-7xl tracking-tight text-tallow-950 font-bold">
              Collections
            </h2>
            {/* <p className='text-lg text-neutral-400'>Create a rustic modern haven with our timeless products.</p> */}
          </div>
          <HorizontalCollection />

        </div>
      </section>
      {/* Shop by Room */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-10 relative">

          <div className="py-4 space-y-2 text-left">
            {/* <span className="uppercase tracking-widest text-tallow-500 font-light">
              Based on your rooms
            </span> */}
            <h2 className="text-5xl md:text-6xl text-tallow-950 tracking-tight font-bold">
              Shop by Room
            </h2>
            <p className='text-lg text-neutral-500'>Explore our products through the rooms you are looking to furnish</p>
          </div>
          <div
            className="flex-1 justify-self-center flex justify-center overflow-x-scroll no-scrollbar scrolling-touch items-center mb-8 py-6 mt-4 md:mt-0"
          >
            <ul className="justify-start md:justify-center flex flex-no-wrap items-center space-y-0 space-x-6">
              {roomTypes.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-sm ml-10 md:ml-0 flex-none uppercase tracking-widest leading-tight font-medium"
                  >
                    <a
                      className="group text-neutral-800 hover:text-tallow-700 transition-all duration-300 ease-in-out"
                      href="#!"
                    >
                      <span className="bg-left-bottom py-2 bg-gradient-to-r from-tallow-600 to-tallow-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        {item.name}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>


        </div>


      </section>
      <Marquee />
    </main>
  )
}
