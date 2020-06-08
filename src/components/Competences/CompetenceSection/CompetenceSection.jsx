/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import styled from 'styled-components';
import ProjectItem from './CompetenceItem/ProjectItem';
import WorkItem from './CompetenceItem/WorkItem';
import EducationItem from './CompetenceItem/EducationItem';
import worksData from '../../../datas/WorksData';
import projectsData from '../../../datas/ProjectsData';
import educationData from '../../../datas/EducationData';
import CompetenceImg from './CompetenceImg/CompetenceImg';
import LangContext from '../../../LangContext';
import schoolImg from '../../../assets/images/school.svg';
import worksImg from '../../../assets/images/career.svg';
import projectImg from '../../../assets/images/coding.svg';

// styles start
const Section = styled.section`
 position: relative;
 margin: 14px 13px 0px;
 text-align: left;
 `;

const CompetenceHeading = styled.h3`  
  position: relative;
  padding-bottom: 5px;
  color: #55B9F3;
  font-size: 11pt;
	text-transform: uppercase;
  text-align: left;  
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
      case 'works':
        return workItem;
      case 'projects':
        return projectItem;
      case 'education':
        return educationItem;
      default:
        return false;
    }
  };


  const bcgImg = (
    (sectionName === 'projects' && projectImg)
    || (sectionName === 'works' && worksImg)
    || (sectionName === 'education' && schoolImg)
  );

  return (
    <>
      <Section>
        <CompetenceImg bcgImg={bcgImg} />
        <CompetenceHeading>{sectionHeader[lang]}</CompetenceHeading>
        {makeSectionItem(sectionName)}
      </Section>
    </>
  );
};


export default CompetenceSection;
