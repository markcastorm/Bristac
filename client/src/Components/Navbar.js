import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';
import { TbWorldBolt } from "react-icons/tb";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Electrical Installation', path: '/services/installation' },
    { name: 'Electrical Maintenance', path: '/services/maintenance' },
    { name: 'Emergency Services', path: '/services/emergency' },
    { name: 'Consultation & Design', path: '/services/consultation' }
  ];

  const aboutLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about/team' },
    { name: 'Certifications', path: '/about/certifications' }
  ];

  return (
    <>
      {/* Main Navbar Container */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${scrolled ? 'translate-y-0' : ''}`}>
        <nav className={`relative z-40 max-w-[1920px] mx-auto h-24 px-4 xl:px-8 group/nav flex items-end gap-x-10 xl:gap-x-16`}>
          
          {/* Logo */}
          <div className="relative w-40 xl:w-44 2xl:w-52 z-20 shrink-0">
            <a href="/" aria-label="Home" className="logo flex items-center gap-3">
              {/* Globe Bolt Icon */}
              <div className={`transition-colors duration-300 delay-100 ${
                scrolled ? 'text-orange-600' : 'text-white'
              }`}>
                <TbWorldBolt className="w-14 h-14 xl:w-16 xl:h-16" />
              </div>
              
              {/* Brand Text */}
              <div className="flex flex-col leading-none">
                <span className={`text-[10px] xl:text-xs font-light tracking-widest uppercase transition-colors duration-300 delay-100 ${
                  scrolled ? 'text-orange-600/70' : 'text-white/70'
                }`} style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  BRISTAC
                </span>
                <span className={`text-2xl xl:text-3xl 2xl:text-4xl font-light tracking-wide lowercase transition-colors duration-300 delay-100 ${
                  scrolled ? 'text-orange-600' : 'text-white'
                }`} style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  enterprises
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-x-10 xl:gap-x-16 ml-auto">
            <div className="min-w-0 shrink relative z-20 text-sm 2xl:text-base">
              <ul className={`flex items-stretch max-w-full h-full relative pl-6 pr-2 2xl:pr-4 bg-white rounded-full shadow-lg shadow-black/5 transition-all duration-300 ${
                scrolled ? 'outline outline-1 outline-gray-900/5' : ''
              }`}>
                
                {/* Home Link */}
                <li className="relative min-w-0">
                  <a
                    href="/"
                    className="active p-2 xl:p-3 2xl:p-4 text-gray-700 h-full inline-flex items-center gap-1 w-full [&.active]:!text-orange-600 hover:text-orange-600 transition-colors"
                  >
                    <span className="first-letter:capitalize w-full inline-block text-ellipsis whitespace-nowrap overflow-hidden select-none">
                      Home
                    </span>
                  </a>
                </li>

                {/* Services Dropdown */}
                <li className="relative min-w-0">
                  <button
                    className="p-2 xl:p-3 2xl:p-4 text-gray-700 h-full inline-flex items-center gap-1 w-full hover:text-orange-600 transition-colors"
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  >
                    <span className="first-letter:capitalize w-full inline-block text-ellipsis whitespace-nowrap overflow-hidden select-none">
                      Services
                    </span>
                    <div className="w-4 h-4 shrink-0 mb-px">
                      <ChevronDown className="w-full h-full" />
                    </div>
                  </button>
                  
                  {activeDropdown === 'services' && (
                    <div className="dropdown-menu rounded-b-2xl bg-white shadow-xl absolute -z-10 w-max min-w-full -ml-2 top-full mt-0 transition-all duration-300 ease-out">
                      <ul className="flex flex-col gap-y-1 px-6 py-4">
                        {services.map((service, idx) => (
                          <li key={idx}>
                            <a
                              href={service.path}
                              className="text-gray-700 h-full w-full inline-flex hover:text-orange-600 active:text-orange-600 select-none transition-colors"
                            >
                              <span className="first-letter:capitalize">{service.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>

                {/* About Link */}
                <li className="relative min-w-0">
                  <a
                    href="/about"
                    className="p-2 xl:p-3 2xl:p-4 text-gray-700 h-full inline-flex items-center gap-1 w-full hover:text-orange-600 transition-colors"
                  >
                    <span className="first-letter:capitalize w-full inline-block text-ellipsis whitespace-nowrap overflow-hidden select-none">
                      About
                    </span>
                  </a>
                </li>

                {/* Projects Link */}
                <li className="relative min-w-0">
                  <a
                    href="/projects"
                    className="p-2 xl:p-3 2xl:p-4 text-gray-700 h-full inline-flex items-center gap-1 w-full hover:text-orange-600 transition-colors"
                  >
                    <span className="first-letter:capitalize w-full inline-block text-ellipsis whitespace-nowrap overflow-hidden select-none">
                      Projects
                    </span>
                  </a>
                </li>

                {/* Contact Link */}
                <li className="relative min-w-0">
                  <a
                    href="/contact"
                    className="p-2 xl:p-3 2xl:p-4 text-gray-700 h-full inline-flex items-center gap-1 w-full hover:text-orange-600 transition-colors"
                  >
                    <span className="first-letter:capitalize w-full inline-block text-ellipsis whitespace-nowrap overflow-hidden select-none">
                      Contact
                    </span>
                  </a>
                </li>

                {/* Search Icon */}
                <li className="shrink-0 ml-6 flex items-center">
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    aria-label="Search"
                    className="w-8 h-8 p-2 flex items-center justify-center rounded-full bg-black/10"
                  >
                    <Search className="w-full h-full text-black/40" />
                  </button>

                  {/* Search Bar Overlay */}
                  <div className={`group/search-bar absolute inset-0 bg-white pointer-events-none opacity-0 -z-10 flex items-center gap-4 px-2 2xl:px-4 transition-opacity rounded-full ease-out ${
                    searchOpen ? '!pointer-events-auto !opacity-100 !z-10' : ''
                  }`}>
                    <div className="w-8 h-8 p-2 flex items-center justify-center rounded-full bg-black/10">
                      <Search className="w-full h-full text-black/40" />
                    </div>
                    <div className="grow">
                      <input
                        aria-label="Search"
                        className="w-full py-2 outline-none"
                        type="text"
                        placeholder="Search..."
                        autoFocus={searchOpen}
                      />
                    </div>
                    <button
                      onClick={() => setSearchOpen(false)}
                      aria-label="Close search"
                      className="w-8 h-8 p-2 flex items-center justify-center rounded-full hover:bg-black/10"
                    >
                      <X className="w-full h-full text-black/80" />
                    </button>
                  </div>
                </li>

                {/* Emergency Call Button */}
                <li className="shrink-0 ml-4 flex items-center">
                  <a
                    href="tel:0724645415"
                    className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">24/7 Emergency</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden ml-auto relative z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="py-1.5 px-4 rounded-full bg-white text-black relative z-20"
              role="button"
              aria-pressed={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <span>Menu</span>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 h-screen max-h-screen bg-orange-600 overflow-hidden transition-all duration-700 ease-out text-white z-30">
          <div className="absolute w-full -z-10 h-screen bg-black overflow-hidden">
            <div className="absolute -inset-[250%] left-[-200%] right-[-200%] rotate-[40deg]" 
                 style={{ background: 'radial-gradient(ellipse at center, #ea580cdd 0%, #000 18%, #000 100%)' }}>
            </div>
          </div>
          
          <div className="max-h-screen h-screen min-h-screen pt-32 relative backdrop-blur-xl container mx-auto flex flex-col overflow-y-auto px-6">
            <div className="grow flex flex-col relative">
              <ul className="flex flex-col gap-2 overflow-y-auto grow h-full pb-8">
                <li>
                  <a href="/" className="h-full inline-flex items-center gap-1 w-full">
                    <span className="first-letter:capitalize font-light text-3xl w-full">Home</span>
                  </a>
                </li>
                
                <li>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                    className="h-full inline-flex justify-start items-center gap-1 w-full"
                  >
                    <span className="first-letter:capitalize font-light text-3xl">Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'mobile-services' && (
                    <ul className="flex flex-col gap-y-1 py-2 pl-4">
                      {services.map((service, idx) => (
                        <li key={idx}>
                          <a href={service.path} className="text-white/80 text-xl font-light hover:text-white">
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <a href="/about" className="h-full inline-flex items-center gap-1 w-full">
                    <span className="first-letter:capitalize font-light text-3xl w-full">About</span>
                  </a>
                </li>

                <li>
                  <a href="/projects" className="h-full inline-flex items-center gap-1 w-full">
                    <span className="first-letter:capitalize font-light text-3xl w-full">Projects</span>
                  </a>
                </li>

                <li>
                  <a href="/contact" className="h-full inline-flex items-center gap-1 w-full">
                    <span className="first-letter:capitalize font-light text-3xl w-full">Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="justify-self-end pt-8 pb-4 border-t border-white/40">
              <a
                href="tel:0724645415"
                className="px-6 py-3 bg-white text-orange-600 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>24/7 Emergency Call</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;