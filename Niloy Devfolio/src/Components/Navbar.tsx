import type { FC } from 'react';
import { useState, useEffect } from 'react';

const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-700/30'
            : 'bg-gray-900/80 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo/Name */}
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            onClick={closeMenu}
                            className="text-2xl md:text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
                        >
                            Niloy Devfolio
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="relative px-3 py-2 text-gray-300 font-medium hover:text-white transition-colors duration-300 group"
                                >
                                    {item}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
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
                    {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={closeMenu}
                            className="block px-4 py-3 text-gray-300 font-medium hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;