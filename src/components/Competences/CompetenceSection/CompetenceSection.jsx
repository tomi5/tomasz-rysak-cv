/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import styled from 'styled-components';
import ProjectItem from './CompetenceItem/ProjectItem';
import WorkItem from './CompetenceItem/WorkItem';
import EducationItem from './CompetenceItem/EducationItem';
import worksData from '../../../datas/WorksData';
import projectsData from '../../../datas/ProjectsData';
import educationData from '../../../datas/EducationData';
import LangContext from '../../../LangContext';

const Section = styled.section`
 padding: 20px 12px 10px 35px;
 `;

const CompetenceHeading = styled.h3`
  font-size: 12pt;
	text-transform: uppercase;
	padding-bottom: 5px;
	padding-left: 10px;
	text-align: left;
`;


const CompetenceSection = ({ competence }) => {
  const { sectionName, sectionHeader } = competence;
  const lang = useContext(LangContext);

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
    <>
      <Section>
        <span className="competence__icon fas fa-user-tie" aria-hidden="true" />
        <CompetenceHeading>{sectionHeader[lang]}</CompetenceHeading>
        {makeSectionItem(sectionName)}
      </Section>
    </>
  );
};


export default CompetenceSection;
