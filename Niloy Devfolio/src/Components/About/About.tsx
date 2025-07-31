import type { FC } from 'react';

const About: FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-blue-400">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-700/50">
                                <div className="w-72 h-72 bg-gray-700 rounded-2xl flex items-center justify-center">
                                    <span className="text-8xl">🧑‍💻</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full"></div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            I'm Niloy Bhuiyan, a Passionate Developer
                        </h3>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            I'm a dedicated full-stack developer with over 3 years of experience in creating
                            modern web applications. I specialize in React, Node.js, and modern JavaScript
                            frameworks to build scalable and user-friendly solutions.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to
                            open-source projects, or sharing my knowledge through blog posts and tutorials.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div>
                                <h4 className="text-blue-400 font-semibold mb-2">Age</h4>
                                <p className="text-gray-300">25</p>
                            </div>
                            <div>
                                <h4 className="text-blue-400 font-semibold mb-2">Location</h4>
                                <p className="text-gray-300">Dhaka, Bangladesh</p>
                            </div>
                            <div>
                                <h4 className="text-blue-400 font-semibold mb-2">Experience</h4>
                                <p className="text-gray-300">3+ Years</p>
                            </div>
                            <div>
                                <h4 className="text-blue-400 font-semibold mb-2">Projects</h4>
                                <p className="text-gray-300">50+ Completed</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <a
                                href="#contact"
                                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;