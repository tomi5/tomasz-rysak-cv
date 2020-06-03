/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { CompetenceDescr } from '../styled';

// styles start
const WorkDuty = styled.li`
    ${CompetenceDescr}
    position: relative;
    margin-left: 20px;
    padding-left: 5px;
    
&::before {
    content: "•";
    position: absolute;
    top: -1px;
    left: 0;
    font-size: 10pt;
    transform: translateX(-100%);
}
`;
// styles end


const WorkDuties = ({ duty }) => <WorkDuty>{duty}</WorkDuty>;


export default WorkDuties;
