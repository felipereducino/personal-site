import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-white px-4 md:px-24 py-12 md:gap-x-[115px]">
      <div className="text-center md:text-left md:max-w-[466px]">
        <h1 className="text-[44px] leading-[60px] font-bold text-gray-800">
          Hi, I&apos;m Felipe,
          <br />
          <span className="text-gray-800">A Front-End Software Engineer</span>
        </h1>
        <p className="mt-10 text-gray-600">
          I&apos;m a technology enthusiast since always. As a part of that, all
          my way through the tecnhology area brought me to become a Front-End
          Software Engineer.
        </p>
        <a
          href="/files/FeipeReducino_resume.pdf"
          download
          className="inline-block mt-4 bg-red-500 text-white w-[218px] h-[47px] leading-[47px] text-center rounded-md hover:bg-red-600 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>

      <div className="flex justify-center md:justify-end mb-6 md:mb-0">
        <div
          className="relative w-60 h-60 rounded-full overflow-hidden"
          style={{ borderBottom: '10px solid #EDF7FA' }}
        >
          <Image
            src="/images/perfil.jpg"
            width={300}
            height={300}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
