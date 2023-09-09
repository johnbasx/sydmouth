'use client'

import clsx from 'clsx'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiBars2, HiXMark } from 'react-icons/hi2'
import { AnimatePresence, motion } from 'framer-motion'
import { useDisableBodyScroll } from '@/hooks/custom'

const navigation = [
  { title: 'Collections', path: '#!' },
  { title: 'Services', path: '#!' },
  { title: 'Gallery', path: '#!' },
  { title: 'Contact us', path: '#!' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  useDisableBodyScroll(menuOpen)
  const menuVariant = {
    hidden: {
      y: -100,
      opacity: 0, //move out of the site
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.4,
        type: 'spring',
        bounce: 0,
      },
    },

    visible: {
      y: 0,
      opacity: 1, // bring it back to nrmal
      transition: {
        type: 'spring',
        bounce: 0,
        stiffness: 50,
        duration: 0.5,
        // delay: 0.5,
        // when: "beforeChildren", //use this instead of delay
        staggerChildren: 0.2, //apply stagger on the parent tag
        delayChildren: 0.5,
      },
    },
  }

  const listVariant = {
    hidden: {
      x: 100, //move out of the site
      opacity: 0,
    },
    visible: {
      x: 0, // bring it back to nrmal
      opacity: 1,
      transition: {
        stiffness: 20,
        type: 'spring',
      },
    },
  }

  return (
    <header className="sticky top-0 bg-tallow-100/10 border-b border-tallow-100/10 z-50 backdrop-filter backdrop-blur-lg">
      <nav>
        <div className="items-center px-4 max-w-screen-xl flex justify-between mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-0 md:py-2 md:block">
            <a href="#!">
              <Image
                src="/images/sydmouth-logo-v2.png"
                width={160}
                height={80}
                alt="Sydmouth House logo"
              />
            </a>
          </div>
          {/* <p >
                        {menuOpen ? "menu is open" : "menu is closed"}
                    </p> */}
          <div
            className="flex-1 justify-self-center hidden pb-3 mt-8 md:block md:pb-0 md:mt-0"
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-sm uppercase tracking-widest leading-tight font-semibold"
                  >
                    <a
                      className="group text-neutral-800 hover:text-tallow-700 transition-all duration-300 ease-in-out"
                      href={item.path}
                    >
                      <span className="bg-left-bottom py-2 bg-gradient-to-r from-tallow-600 to-tallow-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        {item.title}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="inline-block">
            <a
              href="#!"
              onClick={() => setMenuOpen(!menuOpen)}
              className="py-3 px-4 inline-flex justify-center items-center gap-2 font-semibold text-black bg-transparent"
            >
              <HiBars2 />
              Menu
            </a>
          </div>
        </div>
        {/* Trial overlay meny */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVariant}
              animate="visible"
              initial="hidden"
              exit="exit"
              onClick={() => setMenuOpen(false)}
              className="px-6 md:px-8 py-4 md:py-5 h-screen w-screen absolute top-0 overflow-y-hidden bg-tallow-100/50 z-50 backdrop-filter backdrop-blur-lg"
            >
              <div className="flex justify-end items-center">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="py-3 px-2 inline-flex justify-center items-center gap-2 font-semibold text-tallow-950 bg-transparent"
                >
                  <HiXMark />
                  Close
                </button>
              </div>

              <ul className="flex text-tallow-950 flex-col justify-start md:justify-center mt-20 items-start max-w-sm mx-auto h-full gap-6">
                {navigation.map((item) => (
                  <motion.li
                    variants={listVariant}
                    key={item.title + 'navigation'}
                    className="hover:text-tallow-500 transition-colors duration-300 text-5xl md:text-7xl font-semibold"
                    onClick={() => setMenuOpen(false)}
                  >
                    <a href="#!">{item.title}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
