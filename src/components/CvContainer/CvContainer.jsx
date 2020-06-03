import React from 'react';
import styled from 'styled-components';
import Highlights from '../Highlights/Hightlights';
import MainContent from './MainContent';

// styles start
const Wrapper = styled.div`
	position: relative;
	margin: 0 auto;
	height: 29.7cm;
	width: 21cm;
	background-color: #fff;
	box-shadow: 0px 0px 11px 3px #614c4c;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	@media print {
		border: 1px solid black;
		box-shadow: none;
	}
`;
// styles end

const CvContainer = () => (
  <Wrapper>
    <Highlights />
    <MainContent />
  </Wrapper>
);
export default CvContainer;
