import React from 'react';

class ProjectCard extends React.Component {
    render() {
        const { title, description, image, link } = this.props.project;
        return (
            <div className="project-card">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        );
    }
}

export default ProjectCard;