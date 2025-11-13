import React, { useEffect, useState } from "react";
import "./Projects.css";
import {Link} from "react-router-dom"

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <img
              src={project.image || "https://via.placeholder.com/250"}
              alt={project.title}
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            {project.techStack && project.techStack.length > 0 && (
              <ul className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            )}

            {project.github && (
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
