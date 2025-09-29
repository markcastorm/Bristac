import React from 'react';
import { TbWorldBolt } from "react-icons/tb";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  const legalLinks = [
    { name: 'Ethical Standards', path: '/ethics' },
    { name: 'Partner Agencies', path: '/partners' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookie Policy', path: '/cookies' }
  ];

  return (
    <footer className="relative text-white lg:min-h-[500px] min-h-[500px]">
      <div className="h-full">
        {/* Background with gradient */}
        <div className="absolute inset-0 z-0 w-full h-full bg-black overflow-hidden">
          <div 
            className="absolute -inset-[250%] left-[-200%] right-[-200%] -rotate-[10deg]" 
            style={{ background: 'radial-gradient(ellipse at center, #ea580cdd 0%, #000 18%, #000 100%)' }}
          />
        </div>

        <div className="h-full flex flex-col items-stretch relative">
          {/* Main Content */}
          <div className="grow p-16 max-lg:pt-16 max-lg:p-0 flex flex-col lg:grid grid-cols-6 lg:gap-8 h-full items-center relative">
            
            {/* Background SVG Pattern */}
            <div className="absolute inset-0 w-full h-full max-lg:hidden">
              <div className="opacity-10 w-full h-full">
                <svg 
                  className="w-full h-full [&_path]:!fill-none [&_path]:stroke-white"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 1768 493.499"
                >
                  <g transform="translate(17926 1825)" clipPath="url(#a)">
                    <g>
                      <path d="M-16456.739-1908.521s199.619 337.383 0 658.641" strokeWidth="1"/>
                      <path d="M-16786.002-1908.521s164.842 322.627 0 658.428" strokeWidth="1"/>
                      <path d="M-17042.002-1908.521v677.592" strokeWidth="1"/>
                      <path d="M-17298.002-1908.521s-164.838 322.627 0 658.428" strokeWidth="1"/>
                      <path d="M-17627.264-1908.521s-199.619 337.383 0 658.641" strokeWidth="1"/>
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            {/* Logo and Social Icons - Left Column */}
            <div className="relative flex flex-col gap-y-6 justify-center items-center w-max max-lg:py-12 max-lg:w-full">
              <a href="/" aria-label="Home" className="max-w-[230px] flex items-center gap-3">
                <TbWorldBolt className="w-16 h-16 text-white" />
                <div className="flex flex-col leading-none">
                  <span 
                    className="text-xs font-light tracking-widest uppercase text-white/70"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    BRISTAC
                  </span>
                  <span 
                    className="text-3xl font-light tracking-wide lowercase text-white"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    enterprises
                  </span>
                </div>
              </a>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <a href="https://facebook.com" aria-label="Link to Facebook" className="w-5 h-5 hover:opacity-70 transition-opacity">
                  <Facebook className="w-full h-full" />
                </a>
                <a href="https://instagram.com" aria-label="Link to Instagram" className="w-5 h-5 hover:opacity-70 transition-opacity">
                  <Instagram className="w-full h-full" />
                </a>
                <a href="https://linkedin.com" aria-label="Link to LinkedIn" className="w-5 h-5 hover:opacity-70 transition-opacity">
                  <Linkedin className="w-full h-full" />
                </a>
                <a href="https://twitter.com" aria-label="Link to Twitter" className="w-5 h-5 hover:opacity-70 transition-opacity">
                  <Twitter className="w-full h-full" />
                </a>
              </div>
            </div>

            {/* Links Section - Right Columns */}
            <div className="relative col-start-4 col-span-2 max-lg:py-12 max-lg:border-t border-white/10 max-lg:w-full">
              <ul className="lg:columns-2 max-lg:text-center">
                {quickLinks.map((link, index) => (
                  <li key={index} className="py-1">
                    <a href={link.path} className="hover:opacity-70 transition-opacity">
                      <span className="text-base font-light first-letter:capitalize inline-block">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
                {legalLinks.map((link, index) => (
                  <li key={index} className="py-1">
                    <a href={link.path} className="hover:opacity-70 transition-opacity">
                      <span className="text-base font-light first-letter:capitalize inline-block">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-8 xl:pt-4 pb-8 flex max-lg:flex-col max-lg:text-center gap-4 justify-between border-t border-white/10 font-light text-white/60 text-sm px-16">
            <div>Copyright © 2024 Bristac Enterprise. All rights reserved</div>
            <div>
              Email: <a href="mailto:info@bristac-enterprise.com" className="hover:text-white transition-colors">info@bristac-enterprise.com</a>
            </div>
            <div>
              Phone: <a href="tel:0724645415" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;