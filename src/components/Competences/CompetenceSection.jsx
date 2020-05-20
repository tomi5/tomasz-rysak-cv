import React from 'react';
import LangContext from '../../LangContext'
import projectsData from './ProjectItem/ProjectsData';
import ProjectItem from './ProjectItem/ProjectItem';
import worksData from './WorkItem/WorksData';
import WorkItem from './WorkItem/WorkItem';
import educationData from './EducationItem/EducationData';
import EducationItem from './EducationItem/EducationItem';


const CompetenceSection = (props) => {

    const { sectionName, sectionHeader } = props.competence;

    const projectItem = projectsData.map(project =>
        <ProjectItem
            key={project.id}
            project={project}
        />
    )

    const workItem = worksData.map(work =>
        <WorkItem
            key={work.id}
            work={work}
        />
    )

    const educationItem = educationData.map(education =>
        <EducationItem
            key={education.id}
            education={education}
        />
    )

    const getSectionItem = (sectionName) => {
        switch (sectionName) {
            case "projects":
                return projectItem;
            case "works":
                return workItem
            case "education":
                return educationItem
            default:
                return
        }
    }

    return (
        <LangContext.Consumer>
            {(lang) => (
                <section>
                    <span className="competence__icon fas fa-user-tie" aria-hidden="true"></span>
                    <h3>{sectionHeader[lang]}</h3>
                    {getSectionItem(sectionName)}
                </section>
            )}

        </LangContext.Consumer>
    );
}



export default CompetenceSection;
