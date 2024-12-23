import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { title: "Home", link: "/" },
    { title: "Items", link: "/items" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
    { title: "About Us", link: "/about" },
  ]

  return (
    <div className="bg-sky-700 text-white px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center">
          <img
            className="h-8 sm:h-10 md:h-12 lg:h-14 me-4 object-contain"
            src="./logo.png"
            alt="logo"
          />
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
            HETAUDA BOOK HOUSE
          </h1>
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="h-6 w-6 text-white" />
        </button>

        {/* Links for Larger Screens */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="text-sm sm:text-base lg:text-lg hover:text-blue-950 transition-all duration-300"
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/login"
            className="text-sm sm:text-base lg:text-lg px-4 py-1 border border-gray-700 rounded hover:bg-white hover:text-black transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-sm sm:text-base lg:text-lg px-4 py-1 bg-gray-700 text-white rounded hover:bg-white hover:text-black transition-all duration-300"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="block text-sm sm:text-base hover:text-blue-950 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/login"
            className="block text-sm sm:text-base px-4 py-1 border border-gray-700 rounded hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block text-sm sm:text-base px-4 py-1 bg-gray-700 text-white rounded hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
