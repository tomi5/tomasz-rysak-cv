/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const BcgImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    opacity: .3;
    width: 145px;
    height: auto;
`;


const CompetenceImg = ({ bcgImg }) => <BcgImg src={bcgImg} />;


export default CompetenceImg;
