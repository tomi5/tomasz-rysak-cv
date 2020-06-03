import React from 'react';
import styled from 'styled-components';
import Highlights from '../Highlights/Hightlights';
import MainContent from './MainContent';

// styles start
const Wrapper = styled.div`
	position: relative;
	margin: 0 auto 30px;
	height: 29.7cm;
	width: 21cm;
	background-color: #fff;
	box-shadow: 5px 7px 13px 4px #999999;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	@media print {
		border: 1px solid #c7c7c7;
		box-shadow: none;
		margin: 0 auto;
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
