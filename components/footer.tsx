import { FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-white border-t border-gray-300 py-4 min-h-[182px] flex items-center justify-center"
    >
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-[35px] mb-2">
          <Link
            href="mailto:contato@reducino.com"
            className="bg-gray-200 rounded-full p-2 text-gray-700 hover:text-blue-500"
          >
            <MdEmail size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/felipe-reducino/"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-gray-200 rounded-full p-2 text-gray-700 hover:text-blue-500"
          >
            <FaLinkedinIn size={30} />
          </Link>
        </div>
        <p className="text-gray-600 text-sm mt-[26px]">
          Copyright ©2024 All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
