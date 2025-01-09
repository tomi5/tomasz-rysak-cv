/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { CompetenceDescr } from "../styled";

// styles start
const WorkDuty = styled.li`
  ${CompetenceDescr};
  padding-left: 0px;
  margin-left: ${({ isSublist }) => (isSublist ? "55px" : "40px")};
  list-style: ${({ isSublist }) => (isSublist ? "circle" : "disc")};
`;
// styles end

const WorkDuties = ({ duty }) => {
  const isNewFormat = typeof duty === "object";
  const text = isNewFormat ? duty.text : duty;
  const isSublist = isNewFormat && duty.isSublist;

  return <WorkDuty isSublist={isSublist}>{text}</WorkDuty>;
};

export default WorkDuties;
