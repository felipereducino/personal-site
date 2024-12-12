'use client'

import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <header className="w-full p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Home link */}
        <Link
          href="/"
          className="text-xl font-bold"
          style={{ color: '#000000' }}
        >
          Home
        </Link>

        <nav className="hidden md:flex space-x-8">
          {/* <a
            href="/works"
            className="font-bold transition-opacity duration-200 hover:opacity-80"
            style={{ color: '#000000' }}
          >
            Works
          </a> */}
          {/* <Link href="/blog" className="font-bold transition-opacity duration-200 hover:opacity-80" style={{ color: '#000000' }}>
            Blog
          </Link> */}
          <a
            href="#contact"
            className="font-bold transition-opacity duration-200 hover:opacity-80"
            style={{ color: '#000000' }}
          >
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          {!navOpen ? (
            <AiOutlineMenu
              className="text-2xl cursor-pointer text-[#21243D] hover:opacity-90 active:opacity-90 transition-opacity duration-200"
              onClick={toggleNav}
            />
          ) : (
            <AiOutlineClose
              className="text-2xl cursor-pointer text-[#21243D] hover:opacity-90 active:opacity-90 transition-opacity duration-200"
              onClick={toggleNav}
            />
          )}
        </div>
      </div>

      <div
        className={`md:hidden mt-4 flex flex-col items-start space-y-4 ${navOpen ? 'block' : 'hidden'}`}
      >
        <a
          href="#works"
          className="font-bold transition-opacity duration-200 hover:opacity-80"
          style={{ color: '#000000' }}
        >
          Works
        </a>
        <Link
          href="/blog"
          className="font-bold transition-opacity duration-200 hover:opacity-80"
          style={{ color: '#000000' }}
        >
          Blog
        </Link>
        <a
          href="#contact"
          className="font-bold transition-opacity duration-200 hover:opacity-80"
          style={{ color: '#000000' }}
        >
          Contact
        </a>
      </div>
    </header>
  )
}

export default Header
