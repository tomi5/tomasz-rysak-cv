import React from 'react';
import LangContext from '../../LangContext'
import projectsData from './ProjectItem/ProjectsData';
import ProjectItem from './ProjectItem/ProjectItem';

const Projects = () => {

    const HEADER = {
        pl: "Własne Projekty",
        en: "Own Projects",
    }

    const projectItem = projectsData.map(project =>
        <ProjectItem
            key={project.id}
            project={project}
        />
    )


    return (
        <LangContext.Consumer>
            {(lang) => (
                <section>
                    <span className="competence__icon fas fa-code" aria-hidden="true"></span>
                    <h3>{HEADER[lang]}</h3>
                    {projectItem}
                </section>
            )}

        </LangContext.Consumer>
    );
}

export default Projects;