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
        <div>
            
        </div>
    );
};

export default WorksPage;
