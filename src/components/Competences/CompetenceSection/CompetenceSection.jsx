/* eslint-disable no-shadow */
import React from 'react';
import LangContext from '../../../LangContext';
import ProjectItem from './CompetenceItem/ProjectItem';
import WorkItem from './CompetenceItem/WorkItem';
import EducationItem from './CompetenceItem/EducationItem';
import worksData from '../../../datas/WorksData';
import projectsData from '../../../datas/ProjectsData';
import educationData from '../../../datas/EducationData';


const CompetenceSection = ({ competence }) => {
  const { sectionName, sectionHeader } = competence;


  const projectItem = projectsData.map((project) => (
    <ProjectItem
      key={project.id}
      project={project}
    />
  ));

  const workItem = worksData.map((work) => (
    <WorkItem
      key={work.id}
      work={work}
    />
  ));

  const educationItem = educationData.map((education) => (
    <EducationItem
      key={education.id}
      education={education}
    />
  ));

  const makeSectionItem = (sectionName) => {
    switch (sectionName) {
      case 'projects':
        return projectItem;
      case 'works':
        return workItem;
      case 'education':
        return educationItem;
      default:
        return false;
    }
  };

  return (
    <LangContext.Consumer>
      {(lang) => (
        <section>
          <span className="competence__icon fas fa-user-tie" aria-hidden="true" />
          <h3>{sectionHeader[lang]}</h3>
          {makeSectionItem(sectionName)}
        </section>
      )}

    </LangContext.Consumer>
  );
};


export default CompetenceSection;
