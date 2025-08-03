import type { FC } from 'react';
import { useEffect } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaFigma, FaGithub, FaJsSquare, FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiFirebase, SiMongodb } from 'react-icons/si';
import { TiHtml5 } from 'react-icons/ti';

const Skills: FC = () => {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: <FaReact className='text-zinc-100' /> },
                { name: "TypeScript", level: 'Beginner', icon: <BiLogoTypescript className='text-zinc-100' /> },
                { name: "JavaScript", icon: <FaJsSquare className='text-zinc-100' /> },
                { name: "HTML/CSS", icon: <TiHtml5 className='text-zinc-100' /> },
                { name: "Tailwind CSS", icon: <RiTailwindCssFill className='text-zinc-100' /> },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNode className='text-zinc-100' /> },
                { name: "Express.js", icon: <SiExpress className='text-zinc-100' /> },
                { name: "MongoDB", icon: <SiMongodb className='text-zinc-100' /> },
                { name: "Firebase", icon: <SiFirebase className='text-zinc-100' /> }
            ]
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git", icon: <FaGithub className='text-zinc-100' /> },

                { name: "Figma", level: 'Basic', icon: <FaFigma className='text-zinc-100' /> },

            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                        My <span className="text-blue-400">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 animate-fade-in-up animation-delay-200"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className={`bg-gray-900 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
                            style={{ animationDelay: `${400 + categoryIndex * 200}ms` }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 text-center">
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="group">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-2xl">{skill.icon}</span>
                                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-blue-400 font-semibold">
                                                {skill.level}
                                            </span>
                                        </div>

                                        <div className="w-full bg-gray-700 rounded-full h-2">

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills */}
                <div className="mt-16 animate-fade-in-up animation-delay-1000">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        Other Technologies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Bootstrap",
                            "Babel", "ESLint", "Prettier", "VS Code", "Cursor", "Daisy UI", "React Icon", "Axios", "React Router"
                        ].map((tech, index) => (
                            <span
                                key={index}
                                className={`px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
                                style={{ animationDelay: `${1200 + index * 50}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;