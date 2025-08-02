import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const Contact: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                        Get In <span className="text-blue-400">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 animate-fade-in-up animation-delay-200"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
                        I'm always open to discussing new opportunities and interesting projects
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8 animate-fade-in-up animation-delay-400">
                        <h3 className="text-2xl font-bold text-white mb-6">Let's talk about everything!</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Don't hesitate to get in touch with me. I'm always open to discussing new
                            projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 animate-fade-in-up animation-delay-600">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <span className="text-blue-400 text-xl"><MdOutlineEmail /></span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Email</h4>
                                    <p className="text-gray-400">niloybhuiyan522@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 animate-fade-in-up animation-delay-600">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <span className="text-blue-400 text-xl"><FaPhoneAlt /></span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Phone</h4>
                                    <p className="text-gray-400">+880 1743354707</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 animate-fade-in-up animation-delay-600">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <span className="text-blue-400 text-xl"><FaLocationDot /></span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Location</h4>
                                    <p className="text-gray-400">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 animate-fade-in-up animation-delay-800">
                            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {[
                                    { name: 'LinkedIn', icon: <CiLinkedin />, url: 'https://www.linkedin.com/in/niloy-bhuiyan/' },
                                    { name: 'Github', icon: <FaGithub />, url: 'https://github.com/niloy8' },
                                    { name: 'Facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/mdniloy124/' },
                                    { name: 'Email', icon: <MdOutlineEmail />, url: 'mailto:niloybhuiyan522@gmail.com' }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target={social.name === 'Email' ? '_self' : '_blank'}
                                        rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                        className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                        title={social.name}
                                    >
                                        <span className="text-lg">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-800 rounded-xl p-8 animate-fade-in-up animation-delay-400">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="animate-fade-in-up animation-delay-600">
                                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="animate-fade-in-up animation-delay-600">
                                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="animate-fade-in-up animation-delay-800">
                                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                                    placeholder="Subject"
                                />
                            </div>

                            <div className="animate-fade-in-up animation-delay-800">
                                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none transition-all duration-300"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-fade-in-up animation-delay-1000"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;