import type { FC } from 'react';
import { useEffect } from 'react';
import firstProject from "../../assets/image.png"
const Projects: FC = () => {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            id: 1,
            title: "Job Portal",
            description: "A full-stack job portal solution with React, Node.js, and MongoDB. Features include user authentication, job listings it is basically build for the practice of CRUD operations.",
            image: firstProject,
            tags: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
            liveLink: "https://job-portal-ad35b.firebaseapp.com/",
            githubLink: "https://github.com/niloy8/Job-Portal-Project"
        },

    ];

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                        My <span className="text-blue-400">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 animate-fade-in-up animation-delay-200"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
                        Here are some of the projects I've worked on recently. Each project showcases different skills and technologies.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in-up`}
                            style={{ animationDelay: `${400 + index * 100}ms` }}
                        >
                            {/* Project Image */}
                            <div className="h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                                <span className="text-6xl"><img className='h-48 rounded-t-2xl' src={project.image} alt="Project-1" /></span>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-4">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-all duration-300 transform hover:scale-105"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white text-center rounded-lg transition-all duration-300 transform hover:scale-105"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button  if needed in future*/}
                {/* <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
                    <a
                        href="#"
                        className="inline-block px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        View All Projects
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default Projects;