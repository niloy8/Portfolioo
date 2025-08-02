import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import logo from '../assets/image4.png';
const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActiveRoute = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-700/30'
            : 'bg-gray-900/80 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo/Name */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="text-2xl md:text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300 flex items-center"
                        >
                            <img className='w-14 h-14' src={logo} alt="logo" />
                            Niloy Bhuiyan
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`relative px-3 py-2 font-medium transition-colors duration-300 group ${isActiveRoute(item.path)
                                        ? 'text-blue-400'
                                        : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                    <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transition-transform duration-300 origin-left ${isActiveRoute(item.path)
                                        ? 'scale-x-100'
                                        : 'scale-x-0 group-hover:scale-x-100'
                                        }`}></span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="relative w-6 h-6">
                                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                                    }`}></span>
                                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2 ${isOpen ? 'opacity-0' : 'opacity-100'
                                    }`}></span>
                                <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-4 ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/98 backdrop-blur-md shadow-xl border-t border-gray-700/30">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={closeMenu}
                            className={`block px-4 py-3 font-medium rounded-lg transition-all duration-300 transform hover:translate-x-2 ${isActiveRoute(item.path)
                                ? 'text-blue-400 bg-gray-800'
                                : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;