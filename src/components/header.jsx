import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
<nav className="bg-black shadow-md">
<div className="container mx-auto px-4">
  <div className="flex justify-between items-center py-4">
    {/* Logo */}
    <div className="flex items-center">
      <a href="/">
        <img 
          src="./src/assets/logo.png" 
          alt="Company Logo"
          className="h-8 w-auto mr-2"
        />
      </a>
    </div>

    {/* Navigation Links */}
    <div className="hidden md:flex items-center space-x-6">
    </div>

    <SignedOut>
        <SignInButton mode="modal" className="bg-[#00ffff] text-black px-4 py-2 rounded-md hover:bg-[#00cccc]"/>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" appearance={{
          elements: {
            avatarBox: "h-10 w-10",
            userButtonTrigger: "bg-[#00ffff] hover:bg-[#00cccc] rounded-full"
          }
        }}/>
      </SignedIn>
    {/* Login Button
    <div className="hidden md:block">
      <a 
        href="/login" 
        className="bg-[#00ffff] text-black px-4 py-2 rounded-md hover:bg-[#00cccc]"
      >
        Login
      </a>
    </div> */}

    {/* Mobile Menu Button */}
    {/* <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-white hover:text-[#00ffff] focus:outline-none"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button> */}

      {/* Mobile Menu Dropdown */}
      {/* {isOpen && (
        <div className="fixed top-0 right-0 h-full w-[65%] bg-black shadow-lg transform transition-transform duration-300 ease-in-out">
          <div className="relative h-full">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 text-white hover:text-[#00ffff]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-end px-8 py-20 space-y-6">
              <button onClick={() => window.location.href = '/login'} className="text-white hover:text-[#00ffff] text-lg">Login</button>
            </div>
          </div>
        </div>
      )} */}
    {/* </div> */}
  </div>
</div>
</nav>
  )
}

export default Header