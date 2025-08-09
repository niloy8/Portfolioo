import type { FC } from 'react';

const Skills: FC = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 90, icon: "⚛️" },
                { name: "TypeScript", level: 85, icon: "🔷" },
                { name: "JavaScript", level: 95, icon: "💛" },
                { name: "HTML/CSS", level: 90, icon: "🎨" },
                { name: "Tailwind CSS", level: 85, icon: "🎨" },
                { name: "Next.js", level: 80, icon: "▲" }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 85, icon: "💚" },
                { name: "Express.js", level: 80, icon: "🚀" },
                { name: "Python", level: 75, icon: "🐍" },
                { name: "MongoDB", level: 80, icon: "🍃" },
                { name: "PostgreSQL", level: 75, icon: "🐘" },
                { name: "Firebase", level: 70, icon: "🔥" }
            ]
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git", level: 90, icon: "🔧" },
                { name: "Docker", level: 70, icon: "🐳" },
                { name: "AWS", level: 65, icon: "☁️" },
                { name: "Figma", level: 75, icon: "🎨" },
                { name: "Jest", level: 70, icon: "🧪" },
                { name: "Webpack", level: 65, icon: "📦" }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-blue-400">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="bg-gray-900 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
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
                                            <span className="text-blue-400 font-semibold">{skill.level}%</span>
                                        </div>

                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        Other Technologies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Redux", "GraphQL", "Socket.io", "Material-UI", "Bootstrap",
                            "Sass", "Webpack", "Babel", "ESLint", "Prettier", "Postman", "VS Code"
                        ].map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors duration-300"
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