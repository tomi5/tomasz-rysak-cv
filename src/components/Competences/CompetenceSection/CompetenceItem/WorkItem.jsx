import React, { useContext } from 'react';
import styled from 'styled-components';
import { CompetenceWrapper, CompetenceName } from './styled';
import LangContext from '../../../../LangContext';
import WorkDuties from './WorkDuties/WorkDuties';


// styles start
const WorkWrapper = CompetenceWrapper;

const WorkName = styled.h4`
  ${CompetenceName}
  display: inline;
  font-weight: bold;
    &::before {
    display: none;
}
`;
const WorkDate = styled.p`
  ${CompetenceName}
  display: inline;
`;
// styles end

const WorkItem = ({ work }) => {
  const lang = useContext(LangContext);
  const {
    date, company, position, duties,
  } = work[lang];

  return (
    <WorkWrapper>
      <WorkDate>{date}</WorkDate>
      <WorkName>
        {company}
        <span>
          {' - '}
          {position}
        </span>
      </WorkName>
      <ul>
        {duties.map((duty, id) => (
          <WorkDuties
            key={id}
            duty={duty}
          />
        ))}
      </ul>
    </WorkWrapper>
  );
};

export default WorkItem;
