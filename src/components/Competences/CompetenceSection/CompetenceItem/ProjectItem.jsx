import React, { useContext } from 'react';
import styled from 'styled-components';
import LangContext from '../../../../LangContext';
import ProjectButtons from '../../../Buttons/ProjectButtons';
import { CompetenceWrapper, CompetenceName, CompetenceDescr } from './styled';

// styles start
const ProjectWrapper = CompetenceWrapper;

const ProjectName = styled.h4`
  ${CompetenceName}
`;

const ProjectDescr = styled.p`
  ${CompetenceDescr}
`;

const ProjectTechs = styled.span`  
    font-weight: bold;
`;
// styles end

const ProjectItems = ({ project }) => {
  const lang = useContext(LangContext);
  const { techs, GitHub, Live } = project;

  const { name, descr } = project[lang];
  const TXT = {
    pl: 'Technologie: ',
    en: 'Used: ',
  };
  return (
    <ProjectWrapper>
      <ProjectName>{name}</ProjectName>
      <ProjectDescr>{descr}</ProjectDescr>
      <ProjectDescr>
        {TXT[lang]}
        <ProjectTechs>{techs}</ProjectTechs>
      </ProjectDescr>
      <ProjectButtons
        GitHub={GitHub}
        Live={Live}
      />
    </ProjectWrapper>
  );
};

export default ProjectItems;
