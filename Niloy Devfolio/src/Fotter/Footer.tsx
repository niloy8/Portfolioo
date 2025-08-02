import { type FC } from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();



    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">Niloy Devfolio</h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Beginner full-stack developer learning to build modern web applications with a focus on clean design and easy-to-use features.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { name: 'LinkedIn', icon: <CiLinkedin />, url: 'https://www.linkedin.com/in/niloy-bhuiyan/' },
                                { name: 'Github', icon: <FaGithub />, url: 'https://github.com/niloy8' },
                                { name: 'Facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/mdniloy124/' },
                                { name: 'Email', icon: <MdOutlineEmail />, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=niloybhuiyan522@gmail.com' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target='_blank'
                                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 "
                                    title={social.name}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link

                                        to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {[
                                'Web Development',
                                'Frontend Development',
                                'Backend Development',
                                'UI/UX Design',
                                'Consultation'
                            ].map((service) => (
                                <li key={service}>
                                    <span className="text-gray-400">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center ">
                    <p className="text-gray-400 text-sm ">
                        © {currentYear} Niloy Bhuiyan. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;