import React, { useContext } from "react";
import styled from "styled-components";
import { CompetenceWrapper, CompetenceName } from "./styled";
import LangContext from "../../../../LangContext";
import WorkDuties from "./WorkDuties/WorkDuties";

// styles start
const WorkWrapper = CompetenceWrapper;

const WorkDetails = styled.h4`
  ${CompetenceName}
  span {
    font-weight: bold;
  }
`;
// styles end

const WorkItem = ({ work }) => {
  const lang = useContext(LangContext);
  const { date, company, position, duties } = work[lang];

  return (
    <WorkWrapper>
      <WorkDetails>
        {date}
        <span>{` ${company} - ${position}`}</span>
      </WorkDetails>
      <ul>
        {duties.map((duty, id) => (
          <WorkDuties key={id} duty={duty} />
        ))}
      </ul>
    </WorkWrapper>
  );
};

export default WorkItem;
