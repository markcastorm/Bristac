import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-blue-600">Bristac Enterprise</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-200">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-200">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition duration-200">Services</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition duration-200">Projects</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-200">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Projects</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar