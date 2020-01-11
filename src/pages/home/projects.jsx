import React from 'react'
import './index.css'

const Projects = ({ projects }) => (
  <div className="projects-section-container">
    <div className="title">{projects.title}</div>
    <div className="projects-container">
      {projects &&
        projects.projects.map((project, index) => (
          <div key={index} className="project">
            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
              <div className="thumbnail-img-container">
                <img
                  src={project.thumbnailUrl}
                  alt={project.alt}
                  width={400}
                  height="auto"
                  className="project-thumbnail"
                />
              </div>
              <div className="project-details">
                <div className="project-name">{project.name}</div>
                <div>{project.description}</div>
                <div>
                  <span className="technologies-used">Technologies used: </span>{' '}
                  {`${project.technologies}`}
                </div>
              </div>
            </a>
            <div className="github-icon">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/github-dark.png" alt="github-icon" width={30} height={30} />
              </a>
            </div>
          </div>
        ))}
    </div>
  </div>
)

export default Projects
