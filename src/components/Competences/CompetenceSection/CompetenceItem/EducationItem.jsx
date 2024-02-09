import React, { useContext } from 'react';
import styled from 'styled-components';
import LangContext from '../../../../LangContext';
import ProjectButtons from '../../../Buttons/ProjectButtons'
import { CompetenceName, CompetenceDescr } from './styled';


// styles start
const SchoolWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 1px 0px;
  justify-content: space-between;
  z-index: 10;
 `;

const SchoolDetails = styled.h4`
  ${CompetenceName};
  margin-top: 5px;
`;
const SchoolDescr = styled.p`
  ${CompetenceDescr}   
`;
// styles end

const EducationItem = ({ education }) => {
  const lang = useContext(LangContext);
  const { certLink } = education;
  console.log(certLink)

  const { date, school, degree } = education[lang];
  return (
    <SchoolWrapper>
      <div>
        <SchoolDetails>
          {`${date} - ${school}`}
        </SchoolDetails>
        <SchoolDescr>{degree}</SchoolDescr>
      </div>
      { certLink && <ProjectButtons Cert={certLink}/> }
    </SchoolWrapper>
  );
};

export default EducationItem;
