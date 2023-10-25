import React from 'react';

const projects = [
    {
        title: 'Project 1',
        category: 'Web Dev',
        description: 'This is a web development project',
        image: 'https://via.placeholder.com/150',
        link: 'https://example.com',
    },
    {
        title: 'Project 2',
        category: 'Game Design',
        description: 'This is a game design project',
        image: 'https://via.placeholder.com/150',
        link: 'https://example.com',
    },
    {
        title: 'Project 3',
        category: 'Game Dev',
        description: 'This is a game development project',
        image: 'https://via.placeholder.com/150',
        link: 'https://example.com',
    },
];

const WorksPage = () => {
    const webDevProjects = projects.filter((project) => project.category === 'Web Dev');
    const gameDesignProjects = projects.filter((project) => project.category === 'Game Design');
    const gameDevProjects = projects.filter((project) => project.category === 'Game Dev');

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">Web Development Projects</h1>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {webDevProjects.map((project) => (
                    <li key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <a href={project.link}>
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                                <p className="text-gray-700 text-base">{project.description}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>

            <h1 className="text-3xl font-bold my-8">Game Design Projects</h1>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gameDesignProjects.map((project) => (
                    <li key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <a href={project.link}>
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                                <p className="text-gray-700 text-base">{project.description}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>

            <h1 className="text-3xl font-bold my-8">Game Development Projects</h1>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gameDevProjects.map((project) => (
                    <li key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <a href={project.link}>
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                                <p className="text-gray-700 text-base">{project.description}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorksPage;
