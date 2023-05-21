import React, { useState } from 'react'
import Logo from "../assets/logo.png"

type Props = {}

const NavBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className="relative bg-white shadow">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="/">
              <img className="w-auto h-16" src={Logo} alt="Logo" />
            </a>

            <div className="flex lg:hidden">
              <button x-cloak onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 hover:text-gray-60 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${isOpen ? "hidden" : "visible"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${isOpen ? "visible" : "hidden"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div x-cloak className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
            <div className="flex flex-col md:flex-row md:mx-6">
              <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary-color md:mx-4 md:my-0" href="/profile">Profile</a>
              <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary-color md:mx-4 md:my-0" href="/generate">Generate</a>
              <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary-color md:mx-4 md:my-0" href="/saved">Saved</a>
              <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary-color md:mx-4 md:my-0" href="/analytics">Analytics</a>
              <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary-color md:mx-4 md:my-0" href="/job-list">Job List</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
