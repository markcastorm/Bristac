import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Bristac Enterprise</h3>
            <p className="text-gray-300 mb-4">
              Building innovative solutions for modern businesses. We help companies
              transform their operations through cutting-edge technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-200">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-200">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition duration-200">Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@bristac-enterprise.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-200">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Bristac Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer