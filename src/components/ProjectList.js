import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
export default ProjectList;

