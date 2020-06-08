import React, { useContext } from 'react';
import styled from 'styled-components';
import LangContext from '../../../../LangContext';
import { CompetenceWrapper, CompetenceName, CompetenceDescr } from './styled';


// styles start
const SchoolWrapper = CompetenceWrapper;
const SchoolDetails = styled.h4`
  ${CompetenceName}
`;
const SchoolDescr = styled.p`
  ${CompetenceDescr}   
`;
// styles end

const EducationItem = ({ education }) => {
  const lang = useContext(LangContext);

  const { date, school, degree } = education[lang];
  return (
    <SchoolWrapper>
      <SchoolDetails>
        {`${date} - ${school}`}
      </SchoolDetails>
      <SchoolDescr>{degree}</SchoolDescr>
    </SchoolWrapper>
  );
};

export default EducationItem;
