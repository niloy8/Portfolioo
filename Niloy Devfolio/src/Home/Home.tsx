import type { FC } from 'react';
import { useState, useEffect } from 'react';


const roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
];
const Home: FC = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter effect
    useEffect(() => {
        const currentRole = roles[currentIndex];
        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timer);
    }, [isDeleting, displayText, currentIndex]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const offsetTop = element.offsetTop - navbarHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center relative overflow-hidden pt-20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className="text-left">
                        <div className="space-y-6">
                            {/* Greeting */}
                            <div className="animate-fade-in-up">
                                <p className="text-blue-400 text-lg md:text-xl font-medium mb-2">
                                    Hello, I'm
                                </p>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                    Niloy
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        Ahmed
                                    </span>
                                </h1>
                            </div>

                            {/* Dynamic role with typewriter effect */}
                            <div className="animate-fade-in-up animation-delay-200">
                                <div className="flex items-center space-x-2">
                                    <span className="text-xl md:text-2xl text-gray-300">I'm a</span>
                                    <span className="text-xl md:text-2xl font-semibold text-blue-400 min-w-[200px]">
                                        {displayText}
                                        <span className="animate-pulse">|</span>
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="animate-fade-in-up animation-delay-400">
                                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                                    Passionate about creating beautiful, functional, and user-friendly applications.
                                    I love turning complex problems into simple, elegant solutions.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="animate-fade-in-up animation-delay-600">
                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <button
                                        onClick={() => scrollToSection('projects')}
                                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                                    >
                                        View My Work
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="px-8 py-4 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                                    >
                                        Get In Touch
                                    </button>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="animate-fade-in-up animation-delay-800">
                                <div className="flex space-x-6 pt-8 pb-4">
                                    {[
                                        { name: 'GitHub', icon: '👨‍💻', url: '#' },
                                        { name: 'LinkedIn', icon: '💼', url: '#' },
                                        { name: 'Twitter', icon: '🐦', url: '#' },
                                        { name: 'Email', icon: '📧', url: '#' }
                                    ].map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            className="w-12 h-12 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                            title={social.name}
                                        >
                                            <span className="text-xl">{social.icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image/Visual */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="animate-fade-in-up animation-delay-300">
                            <div className="relative">
                                {/* Profile image placeholder */}
                                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-700/50">
                                    <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-full flex items-center justify-center">
                                        <span className="text-6xl md:text-7xl">👨‍💻</span>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-bounce animation-delay-1000"></div>
                                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center space-y-2">
                        <span className="text-gray-400 text-sm">Scroll Down</span>
                        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;