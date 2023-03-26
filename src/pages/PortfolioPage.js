import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        id: 1,
        title: 'E-commerce Website',
        description: 'An online store built with React and Node.js.',
        image: 'https://source.unsplash.com/random/400x300',
        link: 'https://example.com'
    },
    {
        id: 2,
        title: 'Social Network',
        description: 'A social network app built with React and MongoDB.',
        image: 'https://source.unsplash.com/random/400x300',
        link: 'https://example.com'
    },
    {
        id: 3,
        title: 'Weather App',
        description: 'A weather app built with React and OpenWeather API.',
        image: 'https://source.unsplash.com/random/400x300',
        link: 'https://example.com'
    }
];

class PortfolioPage extends React.Component {
    render() {
        return (
            <div className="page portfolio-page">
                <h2>My Portfolio</h2>
                <div className="projects-grid">
                    {projects.map(project => <ProjectCard key={project.id} project={project} />)}
                </div>
            </div>
        );
    }
}

export default PortfolioPage;