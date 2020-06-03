import React, { useContext } from 'react';
import styled from 'styled-components';
import LangContext from '../../../../LangContext';
import { CompetenceWrapper, CompetenceName, CompetenceDescr } from './styled';

// styles start
const SchoolWrapper = CompetenceWrapper;
const SchoolDate = styled.p`
  ${CompetenceName}
    
`;
const SchoolName = styled.h4`
  ${CompetenceName} 
  &::before {
    display: none;
    }
`;

const SchoolDescr = styled.p`
  ${CompetenceDescr} 
`;

// styles end


const EducationItem = ({ education }) => {
  const lang = useContext(LangContext);

  const {
    date, school, degree,
  } = education[lang];
  return (
    <SchoolWrapper>
      <SchoolDate>{date}</SchoolDate>
      <SchoolName>{school}</SchoolName>
      <SchoolDescr>{degree}</SchoolDescr>
    </SchoolWrapper>
  );
};

export default EducationItem;
