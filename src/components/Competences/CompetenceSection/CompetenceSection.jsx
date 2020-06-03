/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUserTie, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import ProjectItem from './CompetenceItem/ProjectItem';
import WorkItem from './CompetenceItem/WorkItem';
import EducationItem from './CompetenceItem/EducationItem';
import worksData from '../../../datas/WorksData';
import projectsData from '../../../datas/ProjectsData';
import educationData from '../../../datas/EducationData';
import LangContext from '../../../LangContext';

// styles start
const Section = styled.section`
 position: relative;
 margin: 10px 12px 10px 35px;
 text-align: left;

 &::before {
    content: "";
    position: absolute;
    top: 7px;
    right: 0;
    height: 1px;
    background-color: #000;
    width: 90%;      
    z-index: 1;
    }
 `;

const CompetenceHeading = styled.h3`  
  position: relative;
  font-size: 12pt;
	text-transform: uppercase;
  padding: 0 30px 5px 15px;	
	text-align: left;
  display: inline-block;
  background: white;
  z-index: 2;  
`;

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: -5px;
  left: -22px;
  width: 26px;
  padding: 3px;
  height: 1.25em;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 50%;
  z-index: 3;
`;
// styles end

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

  const icon = (
    (sectionName === 'projects' && faCode)
    || (sectionName === 'works' && faUserTie)
    || (sectionName === 'education' && faGraduationCap)
  );

  return (
    <>
      <Section>
        <StyledIcon icon={icon} fixedWidth />
        <CompetenceHeading>{sectionHeader[lang]}</CompetenceHeading>
        {makeSectionItem(sectionName)}
      </Section>
    </>
  );
};


export default CompetenceSection;
