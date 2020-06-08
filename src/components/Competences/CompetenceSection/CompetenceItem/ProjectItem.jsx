import React, { useContext } from 'react';
import styled from 'styled-components';
import LangContext from '../../../../LangContext';
import ProjectButtons from '../../../Buttons/ProjectButtons';
import { CompetenceWrapper, CompetenceName, CompetenceDescr } from './styled';

// styles start

const ProjectWrapper = styled.div`
  ${CompetenceWrapper};
  position: relative;  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  z-index: 10;   
  `;

const ProjectName = styled.h4`
  ${CompetenceName};
  margin-top: 5px;
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
      <div>
        <ProjectName>{name}</ProjectName>
        <ProjectDescr>{descr}</ProjectDescr>
        <ProjectDescr>
          {TXT[lang]}
          <ProjectTechs>{techs}</ProjectTechs>
        </ProjectDescr>
      </div>
      <ProjectButtons
        GitHub={GitHub}
        Live={Live}
      />
    </ProjectWrapper>
  );
};

export default ProjectItems;
