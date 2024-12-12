'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  // Animation variants for text content
  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Animation variants for image
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      className="relative flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-pink-50 px-6 md:px-24 py-16 md:gap-x-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left md:max-w-lg z-10"
        variants={textVariants}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Hi, I&apos;m Felipe,
          <br />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500">
            A Front-End Software Engineer
          </span>
        </h1>
        <motion.p
          className="mt-6 text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I&apos;m a technology enthusiast with a passion for creating intuitive
          and dynamic user experiences. My journey in the tech world has led me
          to specialize as a Front-End Software Engineer, where I bring designs
          to life with code.
        </motion.p>
        <motion.a
          href="/files/FeipeReducino_resume.pdf"
          download
          className="inline-block mt-8 bg-red-500 text-white w-56 h-12 flex items-center justify-center rounded-md hover:bg-red-600 transition-all duration-300 shadow-lg relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Download Resume</span>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-white"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="flex justify-center md:justify-end mb-8 md:mb-0 z-10"
        variants={imageVariants}
      >
        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-transparent border-gradient transform transition-transform duration-300 hover:rotate-3d hover:scale-105">
          <Image
            src="/images/perfil.jpg"
            width={320}
            height={320}
            alt="Profile"
            className="w-full h-full object-cover"
            priority
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </motion.div>

      {/* Optional: Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className="w-4 h-4 border-b-2 border-red-500 rounded-full"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
    </motion.div>
  )
}

export default Hero
