/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { CompetenceDescr } from '../styled';

// styles start
const WorkDuty = styled.li`
    ${CompetenceDescr};    
    padding-left: 0px; 
    margin-left: 40px;   
    list-style: disc;
`;
// styles end


const WorkDuties = ({ duty }) => <WorkDuty>{duty}</WorkDuty>;


export default WorkDuties;
